class User {
  constructor(userData) {
    // Object.assign(this, userData);
    this.email = userData.email;
    this.phone = userData.phone;
    this.id = userData.id;
    this.location = userData.location;
    this.gender = userData.gender;
    this.cell = userData.cell;
    this.login = userData.login;
    this.name = userData.name;
    this.picture = userData.picture;
    this.registered = userData.registered;
  }

  getLogin() {
    return this.login;
  }

  renderProfile() {
    const formElement = document.querySelector('#profileForm');
    const imageElement = document.querySelector('#userPicture');
    const registeredElement = document.querySelector('#registered');

    formElement['email'].value = this.email;
    formElement['phone'].value = this.phone;
    const { title, last, first } = this.name;
    formElement['name'].value = `${title} ${first} ${last}`;
    formElement['gender'].value = this.gender;

    const { city, postcode, state, country, street } = this.location;
    console.log(this.location);
    formElement['city'].value = `${city}, ${country}`;
    formElement['zipCode'].value = postcode;
    formElement['state'].value = state;
    formElement['street'].value = `${street.name}, ${street.number}`;

    const { large } = this.picture;
    imageElement.setAttribute('alt', `${title} ${first} ${last}`);
    imageElement.src = large;

    const { date } = this.registered;
    registeredElement.textContent = `${new Date(date).toDateString()}`;
  }
}

const getUserProfile = () => {
  fetch('https://randomuser.me/api')
    .then((response) => {
      return response.json();
    })
    .then(({ results }) => {
      const user = new User(results[0]);
      user.renderProfile();
    })
    .catch((error) => {
      console.error(error);
    });
};

getUserProfile();

const randomUserButton = document.getElementById('randomUser');

randomUserButton.addEventListener('click', () => {
  getUserProfile();
});

// const promiseResolved = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('SUPER DUPER PROMISE');
//   }, 2000);
// });

// promiseResolved
//   .then((result) => {
//     console.log(result);
//     // process
//     return `RESOLVED PROMISE - ${result}`;
//   })
//   .then((parsed) => {
//     console.log(parsed);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const promiseRejected = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('REJECTED PROMISE');
//   }, 2000);
// });

// promiseRejected
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
