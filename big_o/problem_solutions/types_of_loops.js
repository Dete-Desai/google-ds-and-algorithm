// This file contains examples of different types of loops in JavaScript
// Each function demonstrates a different looping technique to find "nemo" in an array.
// The functions are designed to illustrate how different loops can achieve the same result.
let name = [
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

function loopOne(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
      return "Found Nemo!";
    }
  }
}

const loopTwo = (array) => {
  array.array.forEach((element) => {
    if (element === "nemo") {
      console.log("Found Nemo!");
      return "Found Nemo!";
    }
  });
};

const loopThree = (array) => {
  for (let element of array) {
    if (element === "nemo") {
      console.log("Found Nemo!");
      return "Found Nemo!";
    }
  }
};

loopOne(name); // "Found Nemo!"
loopTwo(name); // "Found Nemo!"
loopThree(name); // "Found Nemo!"
