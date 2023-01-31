import {TrieNode} from './trieNode';

export class Trie {
  head: TrieNode;

  constructor() {
    this.head = new TrieNode();
  }

  add(word: string): boolean {
    const lcWord = word.toLowerCase().trim();
    if (!this.has(word)) {
      this.head.add(lcWord);
      return true;
    }
    return false;
  }

  has(word: string): boolean {
    const lcWord = word.toLowerCase().trim();
    if (lcWord === '') {
      return false;
    }
    return false;
  }
}
