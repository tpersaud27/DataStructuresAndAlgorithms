// This function will search for the number of times a substring appears within a string
function naiveStringSearch(string, subString) {
  // Define a counter to check the number of times a substring appears within a string
  let count = 0;

  // We need to loop through the string
  for (let i = 0; i <= string.length - 1; i++) {
    // Loop through the length of the substring
    for (let j = 0; j <= subString.length - 1; j++) {
      // If the characters dont match we break out of this loop so we can check the next character in the string
      if (string[i + j] !== subString[j]) {
        break;
      } 
      // We know we are done checking if j (the number we are incrementing) is equal to the length of the substring
      if (j === subString.length - 1) {
        // We increment the counter because we have successfully reached the end of the subString
        count++;
      }
    }
  }

  return count;
}

let testString = "abcdefhsdkfjhsdefsjdfoiwedefsdkjfiwoedef";
let subString = "def";
// This should return 4
console.log(naiveStringSearch(testString, subString));

console.log(naiveStringSearch("bibblebibblebibblebi", "bib"));

// We essentially loop through all letters in the string and check if there is a match with the first letter of the substring
// If there is a match we should check the consecutive letters of the string if they match the rest of the substring
// If there is a letter that does match we break out of the inner loop
// If all letters match we should increment the number of times the substring appears in the string
