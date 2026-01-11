// O(L): L = length of the works
// tree structure: cat/car/
//     c 
//     \
//      a
//     / \
//    t   r

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
  split(word) {
    let node = this.root;
    let prefix = "";
    for (let char of word) {
      if (node.children[char]) {
        prefix += char;
        node = node.children[char];
      } else {
        break;
      }
    }
    return prefix;
  }

  prefix(root) {
    let result = [];
    const dfs = (node, path) => {
      if (node.isEndOfWord) {
        result.push(path);
      }
      for (let char in node.children) {
        dfs(node.children[char], path + char);
      }
    };
    dfs(root, "");
    return result;
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("dog");
