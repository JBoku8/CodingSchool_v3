const x = "44.6";
const y = 5;
const z = 10;

// 0, '', false, NaN, null, undefined -> მცდარი მნიშვნელობები falsy

// concatenation
// console.log(y + z + x);

// console.log(x + y);
// console.log(x * y);
// type cast
// console.log(typeof x);
// const converted = +x;

// const converted = parseInt(x);
// const converted = Number(x);

// console.log(typeof converted, converted);

// if (0) {
//   console.log("ADAD");
// }

// if (typeof converted === "number" && !isNaN(converted)) {
//   console.log(converted * -y);
// } else {
//   console.error("Not a Number value: " + x);
// }

// if ("admin" === "Admin") {
//   console.log("if");
// } else {
//   console.log("else");
// }

// let number = 10;
// number--;
// console.log(number);

// საწყისი მდგომარეობა, პირობა, ცვლილება
// for (let i = 2; i < 15; i += 2) {
//   console.log("I = ", i);
// }

// console.log("----------");
// for (let i = 1; i < 20; i += 2) {
//   console.log("I = ", i);
// }

// let index = 1;
// while (index < 20) {
//   console.log("I = ", index);
//   index += 2;
// }

let index = 1;
do {
  console.log("I = ", index);
  index += 2;
} while (index < 20);
