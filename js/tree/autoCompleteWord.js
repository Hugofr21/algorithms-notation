// O(L * A): L = length of the words, A = average number of auto-complete suggestions
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
    let newWord = word.toLowerCase();
    let node = this.root;
    for (let char of newWord) {
      if (!node.children[char]) {
        node.children[char] = new TreeNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }
  autoComplete(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    let results = [];
    const dfs = (currentNode, path) => {
      if (currentNode.isEndOfWord) {
        results.push(path);
      }
      for (let char in currentNode.children) {
        dfs(currentNode.children[char], path + char);
      }
    };

    dfs(node, prefix);

    return results;
  }

  printLeafAndRight() {
    const chartSymbolLeft = "//";
    const chartSymbolRight = "\\";
    let depth = 0;
    const dfs = (node, path) => {
      for (let char in node.children) {
        if (Object.keys(node.children).length > 1) {
          console.log(" ".repeat(depth) + chartSymbolLeft + char);
          depth += 2;
          dfs(node.children[char], path + char);
          depth -= 2;
        } else {
          console.log(" ".repeat(depth) + chartSymbolRight + char);
          dfs(node.children[char], path + char);
        }
      }
    };
    dfs(this.root, "");
  }

  creadTreePrint() {
    const dfs = (node, path) => {
      if (node.isEndOfWord) {
        console.log(path);
      }

      for (let char in node.children) {
        dfs(node.children[char], path + char);
      }
    };
    dfs(this.root, "");
  }
}

const trie = new Trie();
trie.insert("hello");
trie.insert("helium");
trie.insert("hero");
trie.insert("heron");
trie.insert("help");
console.log(trie.autoComplete("he"));
console.log(trie.autoComplete("h"));
console.log(trie.autoComplete("heL"));
trie.creadTreePrint();
trie.printLeafAndRight();
