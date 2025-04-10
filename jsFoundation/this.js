// index.js

"use strict";

// this in global space
console.log(this); // globalObject - window, global
// Explanation: In the global scope, 'this' refers to the global object (e.g., 'window' in browsers or 'global' in Node.js).

// this inside a function
function x() {
  // the value depends on strict / non strict mode
  console.log(this);
}
// Explanation: Inside a regular function, 'this' depends on how it is called. In strict mode, it is 'undefined' if not explicitly set; in non-strict mode, it defaults to the global object.
x();

// this inside non-strict mode - (this substitution)
// If the value of this keyword is undefined or null
// this keyword will be replaced with globalObject
// only in non strict mode
// Explanation: In non-strict mode, if 'this' is undefined or null, it is substituted with the global object. This does not apply in strict mode.

// this keyword value depends on how the function is called (window)
window.x();
// Explanation: When called as a method of the 'window' object, 'this' inside 'x' refers to the 'window' object (in non-strict mode).

// this inside a object's method
const student = {
  name: "Akshay",
  printName: function () {
    console.log(this.name);
  },
};
// Explanation: When a function is a method of an object, 'this' refers to the object itself (e.g., 'student' here).
student.printName();

const student2 = {
  name: "Deepika",
};

// call apply bind methods (sharing methods)
student.printName.call(student2); // value of this = student2
// Explanation: The 'call' method allows sharing the 'printName' method with 'student2', setting 'this' to 'student2'.

// this inside arrow function
const obj = {
  a: 10,
  x: () => {
    console.log(this);
  },
};
// Explanation: Arrow functions do not have their own 'this'. Instead, they inherit 'this' from the enclosing lexical scope (here, the global scope or 'undefined' in strict mode).
obj.x();

const obj2 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};
// Explanation: In 'obj2.x', the nested arrow function 'y' inherits 'this' from the enclosing 'x' function's context (here, 'obj2').
obj2.x();

// this inside nested arrow function
// this inside DOM elements => reference to HTMLElement
// Explanation: Nested arrow functions continue to inherit 'this' from their outer scope. When used with DOM elements, 'this' would refer to the HTML element if bound appropriately (not fully demonstrated here).
