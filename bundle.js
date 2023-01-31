'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.DictSearch = void 0;
const fs_1 = require("fs");
const readline = require("node:readline/promises");
const trie_1 = require("./trie");
class DictSearch {
    trie;
    constructor() {
        this.trie = new trie_1.Trie();
    }
    async loadFile(path) {
        const stream = (0, fs_1.createReadStream)(path);
        const rl = readline.createInterface({
            input: stream,
            crlfDelay: Infinity
        });
        for await (const line of rl) {
            this.trie.add(line);
        }
    }
    intersection(wordList) {
        const intersection = new Set();
        for (let word of wordList) {
            const wordProcessed = word.toLowerCase().trim();
            if (this.trie.has(wordProcessed)) {
                intersection.add(wordProcessed);
            }
        }
        return intersection;
    }
    missing(wordList) {
        const missing = new Set();
        for (let word of wordList) {
            const wordProcessed = word.toLowerCase().trim();
            if (!this.trie.has(wordProcessed)) {
                missing.add(wordProcessed);
            }
        }
        return missing;
    }
}
exports.DictSearch = DictSearch;
