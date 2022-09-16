const form = document.querySelector(`.login-form`);
form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === `` || password.value === ``) {
    return alert("Всі поля повинні бути заповнені");
  }
  const object = { Email: email.value, Password: password.value };
  console.log(object);
  form.reset();
});
