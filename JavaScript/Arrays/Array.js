/**
 * This class will build the basic functions of an array
 */

class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Returns the element at the specified index
   */
  get(index) {
    return this.data[index];
  }

  /**
   * Adds a new item to the end of the array
   */
  push(item) {
    // Add the item to the array
    this.data[this.length] = item;
    // Increment the length of the array
    this.length++;
    // Return length of array
    return this.length;
  }

  /**
   * Remove item at the end of array
   */
  pop() {
    // Access last item
    let lastItem = this.data[this.length - 1];
    // Delete last element
    delete this.data[this.length - 1];
    // Decrement length
    this.length--;
    // Return last item
    return lastItem;
  }

  /**
   * Remove item at specified index
   */
  deleteAtIndex(index) {
    // Access the element
    let itemToBeRemoved = this.data[index];
    // Remove item
    this.shiftItems(index);
    // Return deleted item
    return itemToBeRemoved;
  }

  /**
   * Shifts items over to the left by 1 starting at specified index
   */
  shiftItems(index) {
    // Loop through the items starting from the index given to the end of the array
    for (let i = index; i < this.length - 1; i++) {
      // Replace the current data with the next item data
      this.data[i] = this.data[i + 1];
    }
    // Delete the last element
    delete this.data[this.length - 1];
    // Decrement the length
    this.length--;
  }
}

const newArray = new Array();
newArray.push(1);
newArray.push(2);
newArray.push(3);
newArray.push(4);

console.log(newArray);

newArray.pop();

console.log(newArray);

newArray.deleteAtIndex(0);
console.log(newArray);
