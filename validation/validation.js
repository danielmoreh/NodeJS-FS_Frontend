const validateSignupData = (body) => {
  let errors = {};

  // If the first name is empty or shorter than 2 characters
  if (
    !body.firstName ||
    body.firstName.trim() === "" ||
    body.firstName.length < 2
  ) {
    errors.firstName = "First name must be at least 2 characters long";
  }

  // If the last name is empty or shorter than 2 characters
  if (
    !body.lastName ||
    body.lastName.trim() === "" ||
    body.lastName.length < 2
  ) {
    errors.lastName = "Last name must be at least 2 characters long";
  }

  // Check that the first name contains only letters
  if (!/^[a-zA-Z]+$/.test(body.firstName)) {
    errors.firstName = "First name must contain only letters";
  }

  // Check that the last name contains only letters
  if (!/^[a-zA-Z]+$/.test(body.lastName)) {
    errors.lastName = "Last name must contain only letters";
  }

  // If the email is empty or not a valid email
  if (!body.email || body.email.trim() === "" || !isEmail(body.email)) {
    errors.email = "Must be a valid email address";
  }

  // If the password is empty or shorter than 8 characters
  if (!body.password || body.password === "" || body.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  return errors;
};

const validateLoginData = (body) => {
  let errors = {};
  // If the email is empty or not a valid email
  if (!body.email || body.email.trim() === "" || !isEmail(body.email)) {
    errors.email = "Must be a valid email address";
  }

  // If the password is empty or shorter than 8 characters
  if (!body.password || body.password === "" || body.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  return errors;
};

module.exports = { validateSignupData, validateLoginData };
