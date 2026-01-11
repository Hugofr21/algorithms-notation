// tree word search algorithm
//O(N*M): N = number of words, M = average length of the words
class TreeNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TreeNode();
  }
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TreeNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }
  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  printWords() {
    let result = [];
    const dfs = (node, path) => {
      if (node.isEndOfWord) {
        result.push(path);
      }
      for (let char in node.children) {
        dfs(node.children[char], path + char);
      }
    };
    dfs(this.root, "");
    return result;
  }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("grape");
console.log(trie.search("apple")); // true
console.log(trie.search("banana"));
console.log(trie.printWords());
