const axios = require("axios");

const postSignupData = async (body) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:3000/api/v1/users/sign-up",
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = { postSignupData };
