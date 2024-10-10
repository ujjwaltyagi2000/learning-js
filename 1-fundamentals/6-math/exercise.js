/*
Tasks

The postfix and prefix forms

What are the final values of all variables a, b, c and d after the code below?

*/
let a = 1,
  b = 1;

let c = ++a; // ? --> 2
let d = b++; // ? --> 1
console.log(a, b, c, d);

/*
Assignment result

What are the values of a and x after the code below?
*/

let p = 2;

let q = 1 + (p *= 2);

// p = 4, q = 5

console.log(q, p);
/*

// Type conversions

What are results of these expressions?

"" + 1 + 0      // 10 --> num gets converted to string
"" - 1 + 0      // -1 --> "" = 0
true + false    // 1 --> bool to num, 1+0 = 1
6 / "3"         // 2 --> "3" = 3
"2" * "3"       // 6 --> "2" = 2 and "3" = 3
4 + 5 + "px"    // "9px"
"$" + 4 + 5     // "$45"
"4" - 2 //      // 2
"4px" - 2       // NaN
"  -9  " + 5    // '  -9  5'
"  -9  " - 5    //  -14
null + 1        // 1 --> null = 0
undefined + 1   // NaN
" \t \n" - 2    // -2 --> 0-2

*/
