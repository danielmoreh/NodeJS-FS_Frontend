const axios = require("axios");

const postSignupData = async (body) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:3000/api/v1/users/sign-up",
      {
        name: body.name,
        email: body.email,
        password: body.password,
        passwordConfirm: body.passwordConfirm,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const postLoginData = async (body) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:3000/api/v1/users/login",
      {
        email: body.email,
        password: body.password,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = { postSignupData, postLoginData };
