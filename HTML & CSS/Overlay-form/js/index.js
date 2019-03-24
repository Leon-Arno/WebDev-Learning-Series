const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add('active-panel');
});
signInButton.addEventListener('click', () => {
  container.classList.remove('active-panel');
});
