// This function generates an array of greetings
// The space complexity is O(n) because it creates an array that grows with the input size
// The function is designed to demonstrate linear space complexity in a simple way.
// The function is called with a number to illustrate the linear space complexity.
// The function returns an array of greetings, which shows that the space used grows with the input size.
function hiGreetings(n) {
  let greetings = []; // Initialize an empty array to hold greetings
  // This loop iterates 'n' times, where 'n' is the input size
  // The space used grows linearly with the input size 'n'
  // Each iteration adds a new greeting to the array
  // Therefore, the space complexity is O(n).
  // The function returns an array of greetings, which shows that the space used grows with the input size.
  for (let i = 0; i < n; i++) {
    greetings.push("Hello, World!");
  }
  return greetings;
}

hiGreetings(6); // This will return an array with "Hello, World!" repeated 6 times
