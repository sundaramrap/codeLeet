// creating a linked list node

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinedLIst {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

let linkNode1 = new LinedLIst();
linkNode1.insert(2);

linkNode1.insert(4);
linkNode1.insert(5);
console.log(JSON.stringify(linkNode1, null, 2));
