// var, let, and const

/*
JavaScript Variables can be declared in 4 ways:

    Automatically
    Using var
    Using let
    Using const
*/

// Automatically
x = 5;
y = 6;
z = x + y;

console.log("x:", x, "y:", y, "z:", z);

/*
The var keyword was used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

The var keyword should only be used in code written for older browsers.

*/

var greeter = "hey"; // globally scoped variable

function myFunction() {
  var hello = "hello"; // local variable
}

console.log(greeter);
// console.log(hello); // ReferenceError: hello is not defined (because we are calling it outside of the function)

var greeter = "Hi"; // reassigning the variable

console.log(greeter);

// Hoisting of var

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:

console.log(greeter);
var greeter = "say hello";

// it is interpreted as this:

// var greeter;
// console.log(greeter); // greeter is undefined
// greeter = "say hello";

// So var variables are hoisted to the top of their scope and initialized with a value of undefined.

// why we don't use var anymore?

if (true) {
  greeter = "say hello instead";
  // value of the global scoped variable greeter is changed now.
}

console.log(greeter);

// So, since conditional returns true, greeter is redefined to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before.

// If you have used greeter in other parts of your code, you might be surprised at the output you might get. This will likely cause a lot of bugs in your code. This is why let and const are necessary.
