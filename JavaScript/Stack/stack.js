// This is a stack implementation

// Stack functions
// ------------------------------
//// push(element)
//// pop()
//// isEmpty()
//// peek()
//// size()

class Stack {
  // A stack is a list of elements and a has a reference to the top of the stack
  // Top of the stack is the last element added to the stack
  constructor() {
    // We will be using an array to create a new stack
    this.items = [];
    this.top = null;
  }

  // This returns the top element of the stack
  peek() {
    // Check if the stack is empty, return null if true
    if (this.items.length == 0) {
      return null;
    }
    // Return the top element of the stack
    return this.top;
  }

  // Returns true if the stack is empty
  isEmpty() {
    // This will return true if the expression evaluates to true
    return this.items.length === 0;
  }

  // Returns the size of the stack
  size() {
    // We just return the size of the array / stack
    return this.items.length;
  }

  // Adding a new element to the stack
  push(element) {
    // Add the new element to the stack
    this.items.push(element);
    // Let the top be the new element added
    this.top = element;
  }

  // Removes the top element from the stack
  pop() {
    // Check if the stack is not empty
    if (this.items.length !== 0) {
      // Check if there is only one element in the stack
      if (this.items.length === 1) {
        // Let the top element be null because we are removing it
        this.top = null;
        // Return the removed element
        return this.items.pop();
      }
      // Else we make top the second to last element
      else {
        // We getting the last second to last index
        this.top = this.items[this.items.length - 2];
        // Return the last element that we removed
        return this.items.pop();
      }
    }
    // If the stack doesnt exist return null
    else {
      return null;
    }
  }
}

// ----------------------------------------------------------------
let myStack = new Stack();

console.log("You have successfully created a Stack of size: " + myStack.size());
console.log("Is stack empty? " + myStack.isEmpty());
console.log("top: " + myStack.peek());
