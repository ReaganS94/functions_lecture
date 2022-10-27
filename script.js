// function sayHello(timeOfDay, name) {
//   console.log(`Good ${timeOfDay}, ${name}`);
// }

// sayHello("morning", "Armin");

// let hello;

// console.log(hello);

// hello = "hello";

const body = document
  .querySelector("body")
  .addEventListener("click", function () {
    console.log("THE BODY HAS BEEN CLICKED");
  });

//Why do we want to avoid hoisting even if it sounds amazing

// const title = document.querySelector("h1");

// title.style.color = "yellow";

// body.style.backgroundColor = "red";

sayHello("evening", "Dola");

// Function Declaration ES5
function sayHello(timeOfDay, name) {
  console.log(`Good ${timeOfDay}, ${name}`);
}

// Function ES6
const sayHelloArrow = (timeOfDay, name) =>
  console.log(`Good ${timeOfDay}, ${name} from inside the arrow`);

sayHelloArrow("morning", "Nir");
// console.log(myName);
const myName = "Micki";

// Function Expression
const myCoolFunction = function () {
  console.log("Hola");
};

// Article Fn Expression VS Fn Declaration:
//https://www.freecodecamp.org/news/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0/

myCoolFunction();

function myAge() {
  return 25; //<-- The code will exit at this stage
  console.log("I will not run");
}

// console.log(myAge());

// const whatsMyAge = myAge();

// console.log(whatsMyAge);

// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1

// const factorial = function (number) {
//   if (number <= 0) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// };

// ES5
function nameOfFunction(paramters) {
  body;
}

// ES6
const myArrowFunction = (parameters) => {
  body;
};
