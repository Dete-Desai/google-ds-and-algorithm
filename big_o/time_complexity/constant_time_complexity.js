// This function demonstrates constant time complexity O(1)
// It accesses a fixed number of elements in an array regardless of its size.
// The function is designed to illustrate constant time complexity in a simple way.
// The function is called with a small array to illustrate the constant time complexity.
// The function will log the first few elements of the array.
// The time complexity is O(1), meaning it does not change with the size of the input array.

const array = [0, 1, 2, 3, 4, 5];

const constantTimeFunction = (array) => {
  console.log("This function runs in constant time O(1):", array[0]);
  console.log("This function runs in constant time O(1):", array[1]);
  console.log("This function runs in constant time O(1):", array[2]);
  console.log("This function runs in constant time O(1):", array[3]);
  console.log("This function runs in constant time O(1):", array[4]);
  console.log("This function runs in constant time O(1):", array[5]);
  return array[0]; // Accessing the first element is O(1) - constant time complexity
};

constantTimeFunction(array); // "This function runs in constant time O(1): 0" etc.
