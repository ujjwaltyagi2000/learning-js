/*
Basic operators, maths

We know many operators from school. They are things like addition +, multiplication *, subtraction -, and so on.

*/
// operand --> value on which operation is performed
// unary --> operation on single operand
// binary --> two operands

// ex : x = -x; (unary)
// x = x - y; (binary)

// The following math operations are supported:

//     Addition +,
//     Subtraction -,
//     Multiplication *,
//     Division /,
//     Remainder %,
//     Exponentiation **.

console.log(8 % 3);
console.log(2 ** 3);

// string concatenation with binary '+'

let s = "new" + "string";

console.log(s);

// if any of the operands is a string in binary addition, the other one is converted to a string too

console.log("11" + 1);

console.log(5 + 5 + "5");
// first both numbers 5+5 are added = 10, then 10 gets converted to a string and 10 and 5 concatenate to 105

console.log("5" + 5 + 5);
// here the first operand is a string and the second operand is a number, so the number 5 is converted to a string and then the string 5 and 5 concatenate to 55
// the same happens with the remaining 5

console.log(5 + "5" + 5); // doesn't make a difference

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.

// Here’s the demo for subtraction and division:

console.log(6 - "2"); // 4, converts '2' to a number
console.log("6" / "2"); // 3, converts both operands to numbers

/*
The plus + exists in two forms: the binary form that we used above and the unary form.

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

For example:
 */
// No effect on numbers
let x = 1;
console.log(+x); // 1

let y = -2;
console.log(+y); // -2

// Converts non-numbers
console.log(+true); // 1
console.log(+""); // 0

// It actually does the same thing as Number(...), but is shorter.

// The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them?

// The binary plus would add them as strings:

let apples = "2";
let oranges = "3";

console.log(apples + oranges); // "23", the binary plus concatenates strings

// If we want to treat them as numbers, we need to convert and then sum them:

let a = "2";
let b = "3";

// both values converted to numbers before the binary plus
console.log(+a + +b); // 5

// the longer variant
// console.log( Number(apples) + Number(oranges) ); // 5
