const signInForm = document.getElementById('signInForm');

signInForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const passwordInput = document.getElementById('password');

  const credentials = {
    email: 'eve.holt@reqres.in',
    password: passwordInput.value,
  };

  fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.token) {
        localStorage.setItem('token', result.token);
        location.replace('./profile.html');
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
