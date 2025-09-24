// This function has a space complexity of O(1) because it uses a constant amount of space
// regardless of the input size. It does not create any new data structures that grow with the input size.
// The function is designed to demonstrate constant space complexity in a simple way.
function boooo(n) {
  for (let i = 0; i < n.lenghth; i++) {
    // This loop iterates through the input array
    // The space used does not depend on the size of the input array
    // It only uses a fixed amount of space for the loop variable 'i'
    // and the console.log function call.
    // Therefore, the space complexity is O(1).
    // The function prints "boooo" for each element in the array.
    // This demonstrates that the space used does not grow with the input size.
    // The function is called with an array to illustrate the constant space complexity.
    console.log("boooo");
  }
}

boooo([1, 2, 3, 4, 5]); // This will print "boooo" for each element in the array
