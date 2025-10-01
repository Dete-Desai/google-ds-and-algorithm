// You have two arrays of integers, and you want to determine
// if there is a pair of numbers (one from each array) that
// sums up to a specific target value.
// For example:
// const array1 = [1, 2, 3, 9];
// const array2 = [1, 2, 4, 4];
// const target = 8;
// should return false.
// ---------------------
// const array1 = [1, 2, 3, 4];
// const array2 = [1, 2, 4, 4];
// const target = 8;
// should return true (4 from array1 and 4 from array2)

// 2 parameters - arrays - no size limit
// return true or false

// 1. Brute force
// O(n^2) time | O(1) space
// This function checks for pairs that sum up to the target value using a nested loop.
// It has a time complexity of O(n^2) because for each element in the first array,
// it iterates through all elements in the second array. The space complexity is O(1)
// because it uses a constant amount of space regardless of the input size.

const array1 = [1, 2, 3, 9];
const array2 = [1, 2, 4, 4];
const target = 8;

function hasPairWithSum1(arr1, arr2, target) {
  for (let i = 0; i < arr1.lenght; i++) {
    for (let j = 0; j < arr2.lenght; j++) {
      if (arr[i] + arr2[j] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(hasPairWithSum1(array1, array2, target));

// 2. Better solution
// O(a + b) time | O(a) space
function hasPairWithSum2(arr1, arr2, target) {
  let complements = new Set();
  for (let num of arr1) {
    complements.add(target - num);
  }
  for (let num of arr2) {
    if (complements.has(num)) {
      return true;
    }
  }
  return false;
}

console.log(hasPairWithSum2(array1, array2, target));

// 3. Using higher order functions
function hasPairWithSum3(arr1, arr2, target) {
  return arr1.some((num) => arr2.includes(target - num));
}

console.log(hasPairWithSum3(array1, array2, target));
