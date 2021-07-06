const logOutButton = document.getElementById('logOutButton');

logOutButton.addEventListener('click', () => {
  localStorage.removeItem('token');
  location.replace('./index.html');
});
