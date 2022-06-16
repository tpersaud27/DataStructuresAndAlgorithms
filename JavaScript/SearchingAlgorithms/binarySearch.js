// Function takes in a array and a target to be searched
// Returns the index of ther target if it exists in the array, else returns -1 if it does not
function binarySearch(arr, target) {
  // These are the index of the right and left pointers
  // Left pointer is initially at the first index
  let left = 0;
  // Right pointer is initially at the last idnex
  let right = arr.length - 1;

  // As long as the left pointer is not greater than the right pointer
  while (left <= right) {
    // Midpoint is the average between the right and left pointer
    let middle = Math.floor((right + left) / 2);

    // Check if middle pointer is the target
    if (arr[middle] === target) {
      return middle;
    }
    // Else we need to check if the target is greater or less than the middle pointer
    else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  // Target is not found
  return -1;
}

arr = [-2, 3, 4, 5, 8, 9, 11, 13];
target = 11;

console.log("If element is not found return -1, else return index.");
console.log("Element found at index: " + binarySearch(arr, target));
console.log(
  "Element found at index: " + binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 9)
);
console.log("Element found at index: " + binarySearch([1, 2, 3, 4, 5], 2));
