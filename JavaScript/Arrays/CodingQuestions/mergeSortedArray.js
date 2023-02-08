/**
 * Merge two sorted arrays
 * Example:
 * Arr1 = [0,3,4,31]
 * Arr2 = [4,6,30]
 * MergedArray = [0,3,4,4,6,30]
 */

function mergedSortedArrays(arr1, arr2) {
  let combinedLength = arr1.length + arr2.length;
  let mergedArray = [];

  let arr1Index = 0;
  let arr2Index = 0;

  let arr1Item = arr1[arr1Index];
  let arr2Item = arr2[arr2Index];

  // First we should check for a valid input
  //   if (arr1.length <= 0 && arr2.length <= 0) {
  //     return "Invalid array length";
  //   }
  //   if (arr1.length <= 0 && arr2.length > 0) {
  //     return arr2;
  //   }
  //   if (arr2.length <= 0 && arr1.length > 0) {
  //     return arr1;
  //   }

  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item);

    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Index++;
      arr1Item = arr1[arr1Index];
    } else {
      mergedArray.push(arr2Item);
      arr2Index++;
      arr2Item = arr2[arr2Index];
    }
  }

  return mergedArray;
}

console.log(mergedSortedArrays([0, 3, 4, 31], [4, 6, 30, 35, 37, 45]));
