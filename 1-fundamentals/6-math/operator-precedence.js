// very operator has a corresponding precedence number. The one with the larger number executes first.
// If the precedence is the same, the execution order is from left to right.

/*
Precedence 	Name 	Sign
… 	… 	…
14 	unary plus 	+
14 	unary negation 	-
13 	exponentiation 	**
12 	multiplication 	*
12 	division 	/
11 	addition 	+
11 	subtraction 	-
… 	… 	…
2 	assignment 	=
… 	… 	…

Assignment

Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.

That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.

*/

// Chaining assignments

// Another interesting feature is the ability to chain assignments:

let a, b, c;

a = b = c = 2 + 2;

console.log(a); // 4
console.log(b); // 4
console.log(c); // 4

// Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated and then assigned to the variables on the left: c, b and a. At the end, all the variables share a single value.

// Once again, for the purposes of readability it’s better to split such code into few lines:

c = 2 + 2;
b = c;
a = c;

// That’s easier to read, especially when eye-scanning the code fast.

/*
Modify-in-place

We often need to apply an operator to a variable and store the new result in that same variable.

For example:

*/
let n = 2;
n = n + 5;
n = n * 2;

// This notation can be shortened using the operators += and *=:

// let n = 2;
// n += 5; // now n = 7 (same as n = n + 5)
// n *= 2; // now n = 14 (same as n = n * 2)

console.log(n); // 14

/*
Increment/decrement

Increasing or decreasing a number by one is among the most common numerical operations.

So, there are special operators for it:

    Increment ++ increases a variable by 1:
*/
let counter = 2;
counter++; // works the same as counter = counter + 1, but is shorter
console.log(counter); // 3

// Decrement -- decreases a variable by 1:

// let counter = 2;
// counter--;        // works the same as counter = counter - 1, but is shorter
// console.log( counter ); // 1

// Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

// post fix --> return old value and update value later
// pre fix --> update value first and return new value
