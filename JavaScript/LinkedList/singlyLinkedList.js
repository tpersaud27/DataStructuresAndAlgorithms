class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}

class SinglyLinkedList {
  constructor() {
    // Length of the list
    this.length = 0;
    // Head will be at the top of the list
    this.head = null;
  }

  // Returns true if the list is empty
  isEmpty() {
    // Returns true if the head is null, false otherwise
    return this.head === null;

    // Note: We can also check if the length if 0 because we are tracking the length with this implementation
  }

  getHead() {
    return this.head;
  }

  setHead(newHead) {
    this.head = newHead;
    return this;
  }

  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
    } else {
      // Loop through the list while the node is not null
      let tempNode = this.head;
      while (tempNode !== null) {
        console.log(`${tempNode.data} ->`);
        tempNode = tempNode.nextElement;
      }
    }
  }

  // Inserts a new node at the head of the list
  insertAtHead(data) {
    // newNode to hold the data
    let newNode = new Node(data);

    // If the list is empty
    if (this.isEmpty()) {
      this.head = newNode;
      // Increment the length
      this.length++;
      // Return the list
      return this;
    } else {
      // Let the new node nextElement pointer reference the current head
      newNode.nextElement = this.head;
      // Let the head pointer new reference the newNode
      this.head = newNode;
      // Increment the length
      this.length++;
      // Return the list
      return this;
    }
  }

  // Inserts new node at the end of the list
  // This implementation is O(n) time because we are not using a tail pointer, we can reduce the time complexity by using a tail pointer
  insertAtTail(data) {
    // Create a new node to hold the value and pointer to the next node
    let newNode = new Node(data);

    // Check if the list is empty
    if (this.isEmpty()) {
      // Insert node at the head
      this.head = newNode;
      // Increment the length
      this.length++;
      // Return the list
      return this;
    }
    // Else we insert at the end of the list
    // Loop through the list starting at the head element
    let currentNode = this.head;
    // While the current node next element is not null
    while (currentNode.nextElement != null) {
      // Shift the current node pointer to the next element
      currentNode = currentNode.nextElement;
    }

    // Now we set the currentNode next element to the new node
    // This is because the next element of currentNode is null so we are at the end of the list
    currentNode.nextElement = newNode;

    // Increment the length of the linked list
    this.length++;
    // Return the list
    return this;
  }

  // Insert new node at a specific index
  // TODO: Implement this method
  insertAtIndex(data) {}

  // Searching for a specific value in the list
  // Returns true if the value is found, false otherwise
  search(value) {
    // Check if the list is empty
    if (this.isEmpty()) {
      // return false becuase the value is not found
      return false;
    }

    // Start looping from the head node
    let currentNode = this.head;
    // Traverse the list until we find the value or until we reach the end of the list, in that case the value does not exist
    while (currentNode !== null) {
      // Check if the currentNode data is the value we want
      if (currentNode.data === value) {
        return true;
      }
      // Else we keep checking the next node until we reach the end of the list
      currentNode = currentNode.nextElement;
    }
    // Reached the end of the list, return false because value is not found
    return false;
  }

  // Deletes the head node from the list
  deleteAtHead() {
    // Check if the list is empty
    if (this.isEmpty()) {
      // Do nothing, just return the list
      return this;
    }

    // Get the first element in the list
    let firstElement = this.head;

    // Set the head element to the next element in the list
    this.head = firstElement.nextElement;

    this.length--;

    // Return the list
    return this;
  }

  // Deletes the node by value
  // Returns true if the node was deleted, false otherwise
  deleteByValue(value) {
    // Check if the list is empty
    if (this.isEmpty()) {
      // Return false because the value is not found
      return false;
    }

    // Start the head the node
    let currentNode = this.head;

    // if first node's is the node to be deleted, delete it and return true
    if (currentNode.data == value) {
      this.head = currentNode.nextElement;
      return true;
    }

    // Loop through the list and find the value
    while (currentNode.nextElement !== null) {
      // Let the nextNode be the next element of the current node
      let nextNode = currentNode.nextElement;

      // If we find the node with the value.
      // If the next node has the data we want
      if (nextNode.data === value) {
        // Set the currentNode next element pointer to the nextNode nextElement pointer
        // This will bassically skip over the the node with the data, removing it from the list
        currentNode.nextElement = nextNode.nextElement;

        // Decrement the length of the list
        this.length--;
        // Return true because the value was deleted
        return true;
      }
      // Go to the next node
      currentNode = currentNode.nextElement;
    }
    // Return false if the value is not found
    return false;
  }

  // Deletes the tail node in the list
  // Returns true if the node was deleted, false otherwise
  deleteAtTail() {
    // Check if the list is empty
    if (this.isEmpty()) {
      // Return the list
      return this;
    }

    // Let the current node start at the head node
    let currentNode = this.head;

    // Check if next node is null
    if (currentNode.nextElement === null) {
      // This means there is only one element in the list, which is the head so we just delete the head
      this.deleteAtHead();
      // Decrement the length
      this.length--;
      // Return the list
      return this;
    }

    // Loop through the list to get to the second to last node
    while (currentNode !== null) {
      // If the next element is null then we know we are at the end of the list
      if (currentNode.nextElement.nextElement === null) {
        // Set the pointer of the second to last element to null, thereby removing the tail node
        currentNode.nextElement = null;
        // Decrement the length
        this.length--;
        // Return true
        return this;
      }
      currentNode = currentNode.nextElement;
    }

    return false;
  }
} // End of SinglyLinkedLIst

let list = new SinglyLinkedList();
list.insertAtHead("First Element");
list.insertAtHead("Second Element");
list.insertAtHead("Third Element");
// list.insertAtTail("Inserting element at tail");
// console.log(`Searching for value. ${list.search("First Element")}`);
// list.printList();
// list.getHead();

// list.deleteAtHead();
// list.deleteByValue("Second Element");
list.deleteAtTail();
list.printList();
console.log(list.length);
