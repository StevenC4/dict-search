import {createReadStream} from 'fs';
import * as readline from 'node:readline/promises';
import {Trie} from './trie';

export class DictSearch {
  trie: Trie;

  constructor() {
    this.trie = new Trie();
  }

  async loadFile(path: string) {
    const stream = createReadStream(path);
    const rl = readline.createInterface({
      input: stream,
      crlfDelay: Infinity,
    });
    for await (const line of rl) {
      this.trie.add(line);
    }
  }

  intersection(wordList: string[]): Set<string> {
    const intersection = new Set<string>();
    for (const word of wordList) {
      const wordProcessed = word.toLowerCase().trim();
      if (this.trie.has(wordProcessed)) {
        intersection.add(wordProcessed);
      }
    }
    return intersection;
  }

  missing(wordList: string[]): Set<string> {
    const missing = new Set<string>();
    for (const word of wordList) {
      const wordProcessed = word.toLowerCase().trim();
      if (!this.trie.has(wordProcessed)) {
        missing.add(wordProcessed);
      }
    }
    return missing;
  }
}
