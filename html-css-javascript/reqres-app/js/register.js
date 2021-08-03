const signUpForm = document.getElementById('signUpForm');

signUpForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const regData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(regData),
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
