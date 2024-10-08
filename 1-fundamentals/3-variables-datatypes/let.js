// let

/*
So, since times > 3 returns true, greeter is redefined to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before.

If you have used greeter in other parts of your code, you might be surprised at the output you might get. This will likely cause a lot of bugs in your code. This is why let and const are necessary.

*/

/*
let is block scoped

A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.

So a variable declared in a block with let is only available for use within that block.

*/

// 1) solution to hoisting:
// console.log(greeter);
let greeter = "Good Morning"; // hoisting is not possible with let

// 2) variables cannot be redeclared:
let greeting = "say Hi";
// let greeting = "say Hello instead"; // this will cause an error
// SyntaxError: Identifier 'greeting' has already been declared

// 3) local scope

let a = 10;
function f() {
  if (true) {
    let b = 9;

    // It prints 9
    console.log(b);
  }

  // It gives error as it
  // defined in if block
  //   console.log(b);
}
f();

// It prints 10
console.log(a);

//  4) re-declaration in different scope:
let c = 12;
if (true) {
  let c = 11;
  console.log(c); // It prints 11
}
console.log(c); // It prints 12

// declaration in single line:
// let x,y = 99,100; // doesn't work as it does in python
// instead:
// let x = 99,  y = 100; // uncomment it and it will work
// console.log(x, y);
