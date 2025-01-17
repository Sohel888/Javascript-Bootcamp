// FUNCTIONS ARE 1st class CITIZENS/Objects

// --------------------- Normal Function vs Arrow Function ----

/*
// function declaration
function sum(a, b) {
  return a + b;
}

// Function expression
var sum2 = function (a, b) {
  return a + b;
};

// Arrow function

let sum3 = (a, b) => {
  return a + b;
};

const result1 = sum(1, 2); // 3
const result2 = sum2(1, 20); // 21
const result3 = sum3(100, 200); // 300

console.log("hello");
console.log(result1, result2, result3);

*/

// 2 MAIN DIFFERENCE

// 1. this keyword: TODO:
// 2. arguments keyword. (arguments do not work with arrow function)

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(100, 201);

// const sum2 = (a, b) => {
//   console.log(arguments, "arguments in arrow "); //this is illegal
//   return a + b;
// };

// sum2(100, 201);

// Arguments -> 100, 201
// parameters -> a,b

// -------------------------- try catch ------------------------

// throw -> ONLY used WITH ERROR

/*
function sum(a, b) {
  try {
    let c = a + b;
    // --------- google call -> store c (server Call) // can give error --------
    // MOCK THE ERROR
    throw new Error("Not reachable"); // consider this error is generated by google

    return c;
  } catch (error) {
    // handle the error
    // console.log(error);
    alert("hey user there is some error");
  } finally {
    // cleanups.
    console.log("finally");
  }
}

const result = sum(1, 2);
console.log(result, "result"); // 3

*/

//--------------------------Dangerous parts of FUNCTIONS ---------------------
// 2 months

// 1. A function can Accept a FUNCTION as PARAMETERS.
/*
function abc(a, b) {
  console.log(a);
  console.log(b);
}

abc(1, 2);
abc("1", "sdasdsadas");
abc([1, 2, 3, 5], { name: "utkarsh" });

abc(
  () => {
    console.log("a");
  },
  function () {
    console.log("b");
  }
);

*/

//  2. A function can RETURN a FUNCTION.

/*
function abc() {
  const obj = {
    name: "utkarsh",
  };

  function sum() {
    console.log("I am sum functoin and not result");
  }

  return sum;
}

const result = abc();

console.log(result);

// result();

*/

// --------------- Higher Order Functions ----------------------
// 1. A FUNCTION that takes a function as parameter
// 2. A FUNCTION that returns a function as value.

/*
// abc is a HOF (higher order function)
function abc() {
  const obj = {
    name: "utkarsh",
  };

  function sum() {
    console.log("I am sum functoin and not result");
  }

  return sum;
}

// abc1 is a HOF (higher order function)
function abc1(a, b) {
  console.log(a);
  console.log(b);
}

abc1(
  () => {
    console.log("a");
  },
  function () {
    console.log("b");
  }
);

*/

// Spaceshi[]

// HOF -> its a normal function

function spaceShip(left, right, command) {
  if (command === "left") {
    left();
  } else if (command === "right") {
    right();
  } else {
    console.log("Invalid entry for Space ship, EMERGENY MODE ON SPACE SHIP");
  }
}

// ALien

/*
function alienLeft() {
  console.log("MF, ML");
}

function alienRight() {
  console.log("MF, MR");
}

spaceShip(alienLeft, alienRight, "left");
spaceShip(alienLeft, alienRight, "right");
spaceShip(alienLeft, alienRight, "asdasdlaksdalskdjalsjk");

*/

/*
// humans
function humanLeft() {
  console.log("ML");
}

function humanRight() {
  console.log("MR");
}

spaceShip(humanLeft, humanRight, "left");
spaceShip(humanLeft, humanRight, "right");
spaceShip(humanLeft, humanRight, "destory");

*/

// ---------------------- Callback Function ----------------
// Any function you give to HOF is a callback function
// Callback Function is a normal function only.
//  humanLeft, humanRight -> function are known as Callback Function.

// EXAMPLE 1:

abc(); // this will throw error

var abc = () => {
  console.log("hello");
};

abc(); // hello.
