// Reference type examples in JavaScript

var object1 = { value: 10 }; // object1 is a reference to an object in memory
var object2 = object1; // object2 is now a reference to the same object as object1
var object3 = { value: 10 }; // object3 is a reference to a new object in memory

console.log(object1 === object2); // true, because they reference the same object
console.log(object1 === object3); // false, because they reference different objects

object1.value = 15;
console.log(object2.value); // 15, because object2 references the same object as object1
console.log(object3.value); // 10, remains unchanged
