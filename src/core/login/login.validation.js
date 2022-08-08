export function loginFormValidation(values) {
  const errors = {};

  if (!values.login) {
    errors.login = 'Це поле повинно бути заповненим';
  }
  if (!values.password) {
    errors.password = 'Це поле повинно бути заповненим';
  }
  return errors;
}
