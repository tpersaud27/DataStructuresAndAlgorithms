// Selection sort algorithm

// Find the minimum value and then place the value in the beginning of the array
// Pseudocode
// Loop through the array
// Find the mimimum value and swap with the first element of the array
// Start checking from the next element of the array and continue
// Each element that follows woould be place consecutively

function selectionSort(arr) {

    // Outer loop will determine the number of passes we will have
    // This will be arr.length number of times
    for (let i = 0; i < arr.length; i++) {
        
        // Minimum starts at the first element
        let min = i;

        // Inner loop will check adajacent elements for the minimum value
        for (let j = i + 1; j < arr.length; j++){

            // Check the array at the min index is smaller than the current element
            if (arr[j] < arr[min]) {
                // If true, let min be the current element
                min = j;
            }
        }

        // After we have found the minimum we need to swap the index of the minimum with the first element
        // First element would shift to the next index after each pass
        swap(arr,min,i)
    }
    return arr;
}

console.log(selectionSort([65,25,12,22,11]))




// This functions swaps two adjacent elements
function swap(arr, index1, index2) {
  // Temp hold the value of index1
  let temp = arr[index1];
  // Let the index 1 value be equal to the index 2 value
  arr[index1] = arr[index2];
  // Now assign the index 2 value to be the temp hold of index 1 value
  arr[index2] = temp;
}