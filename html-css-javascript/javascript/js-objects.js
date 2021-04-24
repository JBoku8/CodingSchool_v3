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
logger(User.location.country);
logger(User[propName][propValue]);
