/**
 * Create a function that reverses a string
 * Example: 'Hi my name is' returns 'si eman ym iH'
 */

/**
 * Method 1:
 * @param {*} stringToBeReversed
 */
function reverseString(stringToBeReversed) {
  const stringLength = stringToBeReversed.length;
  let reversedString = "";

  // Check the input
  // Check for not string, the length is 1, or type of input is not a string
  if (
    !stringToBeReversed ||
    stringToBeReversed.length < 2 ||
    typeof stringToBeReversed !== "string"
  ) {
    return "Invalid String";
  }

  // Loop through string starting at the end
  for (let i = stringLength - 1; i >= 0; i--) {
    // Push each letter to a new string
    reversedString += stringToBeReversed[i];
  }

  // Return reversed string
  return reversedString;
}

console.log(reverseString("Hello my name is Tommy"));

/**
 * Method 2:
 */
function reverseString2(stringToBeReversed) {
  return stringToBeReversed.split("").reverse().join("");
}

console.log(reverseString2("Hello my name is Tommy"));
