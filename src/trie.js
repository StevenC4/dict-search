const TrieNode = require('./trieNode');

module.exports = class Trie {
  head;

  constructor() {
    this.head = new TrieNode();
  }

  add(word) {
    const lcWord = word.toLowerCase().trim();
    if (!this.has(word)) {
      this.head.add(lcWord);
      return true;
    }
    return false;
  }

  has(word) {
    const lcWord = word.toLowerCase().trim();
    if (lcWord === '') {
      return false;
    }
    return false;
  }
}
