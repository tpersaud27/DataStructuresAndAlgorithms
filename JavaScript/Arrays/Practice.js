const strings = ["a", "b", "c", "d"];

/**
 * AccessElementAtIndex() - O(1)
 * Time complexity is O(1) because we are just indexing the element in memory
 */
console.log("Element at index 2: ", strings[2]);

/**
 * InsertAtEnd()
 * Push - O(1)
 * Since we are adding one element at the end of the array, this is O(1) time
 * We are not looping over anything so this is a constant time operation
 */
strings.push("e");

/**
 * RemoveAtEnd()
 * Pop - O(1)
 * This removes the last item from the array
 * This is O(1) time because we are just removing the last element, we are not looping through anything
 * The computer knows what the location of the last element is since this is stored contiguously
 */
strings.pop();

/**
 * InsertAtBeginning()
 * Unshift - O(n)
 * This is used to add one or more elements to the beginning of an array and returns the new length of the array
 * The time complexity of this operation is O(n) because we are looping through the entire array to shift the other elements over
 * We can realize that using arrays to insert an element at the beginning is not efficient
 */
strings.unshift("x");

/**
 * RemoveAtBeginning()
 * Shift() - O(n)
 * Linear time complexity because of looping over array and needing to shift indexes
 */
strings.shift();

/**
 * InsertAtIndex() / Can Be used for RemoveAtBeginning
 * Splice - O(n)
 * This method can be used to insert and element in the middle of an array
 * The time complexity is O(n) because we need to shift over the elements after the element is added
 * This is allowing us to start at index 2, delete nothing, and insert the item z
 */
strings.splice(2, 0, "z");

/**
 * RemoveAtIndex()
 * Splice - O(n)
 * Linear time complexity due to shifting of element after removing element
 * We are removing 1 element at index 2
 */
strings.splice(2, 1);

console.log(strings);
