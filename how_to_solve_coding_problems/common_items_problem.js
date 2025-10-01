// Give 2 arrays, create a function that lets a user know (true/false) whether
// these two arrays contain any common items
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
// ---------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.

// 2 parameters - arrays - no size limit
// return true or false

// 1. Brute force
// O(n^2) time | O(1) space
// This function checks for common items between two arrays using a nested loop.
// It has a time complexity of O(n^2) because for each element in the first array,
// we can say it is more of a O(a * b) time complexity because for each element in the first array,
// it iterates through all elements in the second array. The space complexity is O(1)
// because it uses a constant amount of space regardless of the input size.

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// 2. Better solution
// O(a + b) time | O(a) space
function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

containsCommonItem3(array1, array2);
