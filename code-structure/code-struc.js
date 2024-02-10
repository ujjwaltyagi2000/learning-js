// Comments

// Statements:
console.log("Hello");
console.log("Sit down"); // two statements can be in one line

// Semicolon isn't always required:
// console.log("Namaste")

// multi- line comment:
/*
console.log(3 +
1
+ 2);
*/

// There are situations where JavaScript “fails” to assume a semicolon where it is really needed.
/*alert("Hello")

[1, 2].forEach(alert);*/

// That’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code in the last example is treated as a single statement.

// Here’s how the engine sees it:

// alert("Hello")[1, 2].forEach(alert);
