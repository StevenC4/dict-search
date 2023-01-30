export class Trie {
	head: TrieNode;

	constructor(contents: Array<string>) {
		this.head = new TrieNode();
		if (!!contents) {
			this.load(contents);
		}
	}

	load(contents: Array<string>): void {

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

export class TrieNode {
	isCompleteWord: boolean;
	children: Array<string>;

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
