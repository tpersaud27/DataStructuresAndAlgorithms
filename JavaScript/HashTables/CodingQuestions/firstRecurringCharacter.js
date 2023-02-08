/**
 *
 * Return the first recurring character found
 *
 *
 * Given an array [2,5,1,2,3,5,1,2,4]
 * It should return 2
 */

function firstRecurringCharacter(arr) {
  // Javascript set is a collection of unique values
  let uniqueNumbers = new Set();

  // Loop through the array and add each element to a set
  for (let i = 0; i < arr.length; i++) {
    // Check if the element exists in the set
    if (uniqueNumbers.has(arr[i])) {
      // Return the number
      return arr[i];
    }

    // Add elements to the set
    uniqueNumbers.add(arr[i]);
  }

  // If there is no unique number return undefined
  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));


