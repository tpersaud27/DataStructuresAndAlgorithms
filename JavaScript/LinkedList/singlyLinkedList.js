class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  insertAtBeginning(value) {}

  insertAtEnd(value) {
    this.length++;

    node = new Node();
    node.value = value;
    node.next = null;
  }
}
