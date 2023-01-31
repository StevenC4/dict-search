const {createReadStream} = require('fs');
const readline = require('node:readline').promises;
const Trie = require('./trie');

module.exports = class DictSearch {
  trie;

  constructor() {
    this.trie = new Trie();
  }

  async loadFile(path) {
    const stream = createReadStream(path);
    const rl = readline.createInterface({
      input: stream,
      crlfDelay: Infinity,
    });
    for await (const line of rl) {
      this.trie.add(line);
    }
  }

  intersection(wordList) {
    const intersection = new Set();
    for (const word of wordList) {
      const wordProcessed = word.toLowerCase().trim();
      if (this.trie.has(wordProcessed)) {
        intersection.add(wordProcessed);
      }
    }
    return intersection;
  }

  missing(wordList) {
    const missing = new Set();
    for (const word of wordList) {
      const wordProcessed = word.toLowerCase().trim();
      if (!this.trie.has(wordProcessed)) {
        missing.add(wordProcessed);
      }
    }
    return missing;
  }
};
