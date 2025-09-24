let names = [
  "nemo",
  "dory",
  "marlin",
  "squirt",
  "crush",
  "bruce",
  "hank",
  "destiny",
  "bailey",
  "nigel",
];

function quadraticTimeExample(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      for (let j = 0; j < array.length; j++) {
        console.log("Found Nemo at index " + i);
      }
    }
  }
}

quadraticTimeExample(names); // This will log "Found Nemo at index i" for each occurrence of "nemo" in the array, demonstrating O(n^2) time complexity.
// The space complexity is O(1) since no additional space is used that grows with input size.
