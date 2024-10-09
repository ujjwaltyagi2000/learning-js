/*
JavaScript variables can be converted to a new variable and another data type:

    By the use of a JavaScript function
    Automatically by JavaScript itself
*/

// Converting Strings to Numbers

// The global method Number() converts a variable (or a value) into a number.

// A numeric string (like "3.14") converts to a number (like 3.14).

// An empty string (like "") converts to 0.

// A non numeric string (like "John") converts to NaN (Not a Number).
// Ebamples

// TYPE THESE IN THE TERMINAL -->

// These will convert:
Number("3.14");
Number(Math.PI);
Number(" ");
Number("");

// These will not convert:
Number("99 88");
Number("John");

// More methods that can be used to convert strings to numbers:

// Number() -->	Returns a number, converted from its argument
// parseFloat() -->	Parses a string and returns a floating point number
// parseInt() -->	Parses a string and returns an integer

// The unary + operator can be used to convert a variable to a number:
// Example
let y = "5"; // y is a string
let x = +y; // x is a number
console.log(x);
console.log(typeof x);

// If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):
// Example
let a = "John"; // y is a string
let b = +a; // x is a number (NaN)
console.log(b);
console.log(typeof b);

/*
Converting Numbers to Strings

The global method String() can convert numbers to strings.

It can be used on any type of numbers, literals, variables, or expressions:

TRY THESE IN THE TERNINAL -->
Example*/
String(x); // returns a string from a number variable x
String(123); // returns a string from a number literal 123
String(100 + 23); // returns a string from a number from an expression

// The Number method toString() does the same.
// Example
x.toString();
(123).toString();
(100 + 23).toString();

/*
Automatic Type Conversion

When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

The result is not always what you expect:

*/
console.log(5 + null); // returns 5         because null is converted to 0
console.log("5" + null); // returns "5null"   because null is converted to "null"
console.log("5" + 2); // returns "52"      because 2 is converted to "2"
console.log("5" - 2); // returns 3         because "5" is converted to 5
console.log("5" * "2"); // returns 10        because "5" and "2" are converted to 5 and 2
