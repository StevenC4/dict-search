export class TrieNode {
	isCompleteWord: boolean;
	children: string[];

	constructor() {
		this.isCompleteWord = false;
		this.children = [];
	}

	add(word: string): void {
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
}
