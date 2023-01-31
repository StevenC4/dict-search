module.exports = class TrieNode {
  isCompleteWord;
  children;

  constructor() {
    this.isCompleteWord = false;
    this.children = [];
  }

  add(word) {
    if (!!word.length) {
      this.isCompleteWord = true;
    } else {
      const firstLetter = word[0];
      const restOfWord = word.substring(1);
      if (!(firstLetter in this.children)) {
        this.children[firstLetter] = new TrieNode();
      }
      this.children[firstLetter].add(restOfWord);
    }
  }
};
