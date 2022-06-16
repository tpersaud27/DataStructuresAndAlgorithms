// This accepts an array and a value
function linearSearch(arr, value) {
  // Loop through all elements in the array
  for (let element of arr) {
    //   If the element is equal to the value we want to find
    if (element === value) {
      // Return the index of the element
      return arr.indexOf(element);
    }
  }
  // Element is not found, we return -1
  return -1;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let names = ["Tommy", "Emily", "Abu"];

console.log('If index is -1, item does not exist, else index is printed.')
console.log('Index found is: ' + linearSearch(numbers, 11));
console.log('Index found is: ' + linearSearch(names, "Abu"));
