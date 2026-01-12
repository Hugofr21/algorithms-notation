class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.left = null;
    this.right = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      newNode.left = current;
      current.right = newNode;
    }
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      if (current.left) {
        console.log(" L:", current.left.data);
      }
      if (current.right) {
        console.log(" R:", current.right.data);
      }

      current = current.next;
    }
  }
}
const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);
list.insert(60);
list.insert(70);
list.insert(80);
list.display();
