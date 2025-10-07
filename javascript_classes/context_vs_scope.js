// Context vs Scope in JavaScript

// Scope refers to the visibility of variables and functions in different parts of the code.
// Context refers to the value of 'this' within a function, which can change based on how the function is called.

function exampleFunction() {
  console.log(this); // 'this' refers to the context in which the function is called
}

const object = {
  a: function () {
    console.log(this); // 'this' refers to 'object' when called as a method of 'object'
  },
};
