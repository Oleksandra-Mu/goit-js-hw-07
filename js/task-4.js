const formSubmit = document.querySelector('.login-form');
formSubmit.addEventListener('submit', event => {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }
  const formElements = event.target.elements;
  const formData = {};
  for (let element of formElements) {
    if (element.name) {
      formData[element.name] = element.value.trim();
    }
  }
  console.log(formData);
  event.target.reset();
});
