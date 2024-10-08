// const
// The const keyword has all the properties that are the same as the let keyword, except the user cannot update it and have to assign it with a value at the time of declaration.
// These variables also have the block scope.
// It is mainly used to create constant variables whose values can not be changed once they are initialized with a value.

// error --> TypeError: Assignment to constant variable.

/*
const a = 10;
function f() {
  a = 9;
  console.log(a);
}
f();
*/

// const to declare JS objects

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(person);

// this is allowed
person.name = "Peter";
console.log(person);

// this is not allowed
// person = { full_name: "Jane", age: 25, city: "London" };
// console.log(person);

// this is also not allowed
// const person = {
//   name: "Jane",
//   age: 25,
//   city: "London",
// };

/*
This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. 
So if we declare a variable with const, we can neither do this:

*/
// const greeting = "say Hi";
// greeting = "say Hello instead";// error: Assignment to constant variable.

// nor this:
//  const greeting = "say Hi";
// const greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
