// Function takes in an array and outputs a sorted array
function bubbleSort(arr) {
  // We loop the length of the array and decrease each time
  for (let n = arr.length - 1; n > 0; n--) {
    // Loop through the array and check for comparisons
    // The comparisons should decrease as the number of times decreases
    // The number of comparisons decrease as we do each pass because the highest number is bubbled to the top
    for (let i = 0; i <= n - 1; i++) {
      // If the current element is greater we should swap. This is because we want the greatest element to bubble to the top
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }
  // Returns the sorted array
  return arr;
}
// This functions swaps two adjacent elements
function swap(arr, index1, index2) {
  // Temp hold the value of index1
  let temp = arr[index1];
  // Let the index 1 value be equal to the index 2 value
  arr[index1] = arr[index2];
  // Now assign the index 2 value to be the temp hold of index 1 value
  arr[index2] = temp;
}

console.log(bubbleSort([1, 8, 7, 5]));
console.log(bubbleSort([1, 8, 7, 5, 12, 4, 5, 6, 7, 1, 1, 3, 18, 20, 24, 3]));

// Loop through array.length -1 times and decrease each time
// Have a inner loop through through the array and check if the current element is greater than next
// If it is we swap
// Else we continue looping through

// This can be further optimized