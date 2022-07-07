// Implementation of Queue Data Structure

// Queues can be implemented using arrays, linked list, or stacks
// We will use a double-linked list

const DoublyLinkedList = require("../LinkedList/doublyLinkedList.js");

class Queue {
  constructor() {
    // The queue items are store in a double linked list
    this.items = new DoublyLinkedList();
  }
  // Returns true or false depending if the queue is empty
  isEmpty() {
    return this.items.length == 0;
  }
  // Get the first item in the queue
  getFront() {
    //   If the queue is not empty
    if (!this.isEmpty()) {
      // Return the head of the double linked list
      return this.items.getHead();
    } else {
      // Return null because the queue is empty
      return null;
    }
  }
  // Returns the size of the queue
  size() {
    return this.items.length;
  }
  // Inserts element at the end of the queue
  enqueue(element) {
    // Insert at the tail node because we are adding at the end of the queue
    return this.items.insertTail(element);
  }
  // Removes element at the start of the queue
  dequeue() {
    // Remove the head node this is because we are removing the first element in the queue
    return this.items.removeHead();
  }
}

var myQueue = new Queue();
myQueue.enqueue(8);
console.log("You have successfully created a Queue of size: " + myQueue.size());

console.log("Is queue empty()?: " + myQueue.isEmpty());
console.log("getFront(): " + myQueue.getFront());
