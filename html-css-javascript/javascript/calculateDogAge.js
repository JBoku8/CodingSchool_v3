const DOG_AGE_INDEX = 7;
/**
 *
 * @param {Number} dogAge
 * @returns {String}
 */
function calculateDogAge(dogAge, conversationRate) {
  const rate = conversationRate ?? DOG_AGE_INDEX;
  const convertedAge = dogAge * rate;

  return `Your doggie is ${convertedAge} years old in dog years!`;
}

logger(calculateDogAge(2, 4));
logger(calculateDogAge(4));
logger(calculateDogAge(14));
