const isEmail = (email) => {
  // Regex for email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validateSignupData = (body) => {
  let errors = {};

  //if the name is empty or shorter than 3 characters
  if (!body.name || body.name.trim() === "" || body.name.length < 3) {
    errors.name = "Name must be at least 3 characters long";
  }

  // If the email is empty or not a valid email
  if (!body.email || body.email.trim() === "" || !isEmail(body.email)) {
    errors.email = "Must be a valid email address";
  }

  // If the password is empty or shorter than 8 characters
  if (!body.password || body.password === "" || body.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  // If the passwordConfirm is not the same as the password
  if (
    !body.passwordConfirm ||
    body.passwordConfirm === "" ||
    body.passwordConfirm !== body.password
  ) {
    errors.passwordConfirm = "Passwords must match";
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
