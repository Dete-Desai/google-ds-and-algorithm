// Linear Function Example// This function searches for "nemo" in an array and returns a message when found.
// The time complexity is O(n), meaning it scales linearly with the size of the input array.
// The function is designed to demonstrate linear time complexity in a simple way.
// The function is called with a large array to illustrate the linear time complexity.

const nemo = ["nemo"]; // The time complexity of this line is O(1) since it is a constant time operation.
const large = new Array(1000).fill("nemo"); // This creates an array of 1000 elements, all set to "nemo".

const findNemo = (array) => {
  for (let i = 0; i < array.length; i++) {
    // The time complexity of this loop is O(n) because it iterates through each element in the array.
    if (array[i] === "nemo") {
      // The time complexity of this comparison is O(1) since it checks each element against "nemo".
      console.log("Found Nemo!"); // This line executes when "nemo" is found, indicating a successful search.
      return "Found Nemo!"; // The function returns a message indicating that "nemo" was found.
    }
  }
  console.log("Nemo not found");
  return "Nemo not found";
};

findNemo(large); // "It takes liner time to find Nemo O(n) --> Liner Time Complexity where n is the number of elements in the array"
