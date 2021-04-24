/**
 * @source  https://github.com/workshopper/javascripting/tree/master/problems
 */

/**
 * ! for-loop.js
 */
const limit = 10;
let total = 0;

for (let i = 0; i < limit; i++) {
  total += i;
}

// logger(total);

/**
 * ! arrays.js
 */
const pizzaToppings = ["tomato", "sauce", "cheese", "pepperoni"];
// logger(pizzaToppings);

// accessing-array-values.js
// logger(pizzaToppings[1]);

/**
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @returns
 * ! function-arguments.js
 */
const math = function (x, y, z) {
  // code
  return x * y * z;
};

// logger(math(53, 61, 67));

/**
 *
 * @param {String} food
 * @returns
 * functions.js
 */
const eat = (food) => `${food} tasted really good.`;

// logger(eat("bananas"));

/**
 * ! if-statement.js
 */
const fruit = "orange";

// if (fruit.length > 5) {
//   logger("The fruit name has more than five characters.");
// } else {
//   logger("The fruit name has five characters or less.");
// }

/**
 * ! looping-through-arrays.js
 */

const pets = ["cat", "dog", "rat"];

for (let i = 0; i < pets.length; i++) {
  logger(`${pets[i]}s`);
}
