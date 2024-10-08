/*A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, use the let keyword. */

let message;
message = "Hello";

//  OR

let text = "Thanks"; // define the variable and assign the value

console.log(message, text);

// We can also declare multiple variables in one line:
let user = "John",
  age = 25;

// That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a single line per variable.

// The multiline variant is a bit longer, but easier to read:

// let user = "John";
// let age = 25;
// let dept = "EEE";

// In older scripts, you may also find another keyword: var instead of let:

// We can also change it as many times as we want:

let greeting;

greeting = "Ola!";

greeting = "Ciao!"; // value changed

console.log(greeting);

// When the value is changed, the old data is removed from the variable

/* A variable should be declared only once.

A repeated declaration of the same variable is an error:

let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared */

// Variable Naming:
// There are two limitations on variable names in JavaScript:

// 1. The name must contain only letters, digits, or the symbols $ and _.
// 2. The first character must not be a digit.

// Examples of valid names:

let userName;
let test123;

// Examples of incorrect variable names:

/* let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name
// When the name contains multiple words, camelCase is commonly used. That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.

// What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning.

// These names are valid:

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

console.log($ + _); // 3`

// Examples of incorrect variable names:

/* let 1a; // cannot start with a digit

let my-name; // hyphens '-' aren't allowed in the name */

// In JavaScript, let, const, and var are used to declare variables, but var is being deprecated in favor of let and const due to scoping issues.
