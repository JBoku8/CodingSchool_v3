// key/value
const john = {
  firstName: "John",
  lastName: "Doe",
  age: 27,
};

const james = {
  firstName: "James",
  lastName: "Smith",
  age: 37,
};

const User = {
  gender: "female",
  name: {
    title: "Mrs",
    first: "Veronika",
    last: "Hagberg",
  },
  location: {
    street: {
      number: 4627,
      name: "Festningsplassen",
    },
    city: "Stranda",
    state: "Description",
    country: "Norway",
    postcode: "5310",
    coordinates: {
      latitude: "49.3095",
      longitude: "8.4101",
    },
    timezone: {
      offset: "-4:00",
      description: "Atlantic Time (Canada), Caracas, La Paz",
    },
  },
  login: {
    uuid: "f48473c3-b035-4fa5-83ef-a94417f79e92",
    username: "yellowostrich624",
    password: "tara",
    salt: "blx0Nvro",
    md5: "0f5dbdc1c43e20d4ef0e7b6cb8790be1",
    sha1: "d7748ed780ea995c378ce231c664dfac5cc52558",
    sha256: "671ea119a38cea6ee3dc0948006e93669ac3ff3e8bad0a63c002c58dda0c30f1",
  },
};

const propName = "location";
const propValue = "country";

// logger(james.firstName);
// logger(john.firstName);
// logger(User.location.country);
// logger(User[propName][propValue]);

/**
 *
 * @ value type
 */

// let numberOne = 13;
// let numberTwo = numberOne;
// logger(numberTwo === numberOne);

// numberTwo = 200;
// logger(numberTwo === numberOne);

// let strOne = "String 1";
// let strTwo = strOne;
// logger(strOne === strTwo);

// strTwo = "String 2";
// logger(strOne === strTwo);

/**
 *
 * @ reference type
 */
// [0, 1, 2, 3, 4]
const arrOne = ["One", "Two"]; // reference
const arrTwo = arrOne.slice(); // new reference

// arrTwo.push("Three");
// logger(arrOne);
// logger(arrTwo);
// console.log(arrTwo === arrOne);

// if (arrTwo.includes("Three")) {
//   logger("Includes Three");
// }

// const i = arrTwo.indexOf("Three");
// logger(arrTwo[i]);

// const arrowFunction = (arg1, arg2) => {
//   console.log(arg1, arg2);
// };

// arrOne.forEach((value, index) => {
//   logger(`${index}=${value}`);
// });

const numbers = [233, 431, 22, 334, 400];
// const filtered = numbers.filter((value) => {
//   return value % 2 === 0;
// });
// logger(numbers);
// logger(filtered);

const doubledNumbers = numbers.map((value) => {
  return value * 2;
});

// logger(doubledNumbers);
// Imperative programming
// Declarative programming

const TodoList = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 3,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

let userId3TodoIndex = TodoList.find((todo) => {
  return todo.userId === 3;
});

userId3TodoIndex = TodoList.findIndex((todo) => {
  return todo.userId === 3;
});

logger(userId3TodoIndex);
