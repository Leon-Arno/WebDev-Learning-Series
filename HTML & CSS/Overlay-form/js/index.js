const elements ={
  signUpButton = document.getElementById('signUp'),
  signInButton = document.getElementById('signUp'),
  container = document.getElementById('container')
}

elements.signUpButton.addEventListener('click',() =>{
  container.classList.add('active-panel')
})
elements.signInButton.addEventListener('click', () => {
  container.classList.remove('active-panel')
})
