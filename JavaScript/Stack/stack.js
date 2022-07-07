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
    if (this.items.length === 0) {
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

  //
}
