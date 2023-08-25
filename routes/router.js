const express = require("express");
const router = express.Router();
const {
  validateSignupData,
  validateLoginData,
} = require("../validation/validation");
const { isEmpty } = require("../utilities/util");
const messages = require("../utilities/messages");
const { postSignupData } = require("../services/userService");

router.get("/", (req, res) => {
  res.render("home", { pagename: "Home" });
});

router.get("/login", (req, res) => {
  const errors = validateLoginData(req.body);
  if (isEmpty(errors)) {
    res.render("home", {
      pagename: "Home",
      message: messages.successfullLogin,
    });
  } else {
    res.render("login", {
      pagename: "Login",
      body: req.body,
      errs: errors,
      messages: messages.failedLogin,
    });
  }
});

router.get("/sign-up", (req, res) => {
  const errors = validateSignupData(req.body);
  if (isEmpty(errors)) {
    postSignupData(req.body)
      .then((result) => {
        res.render("home", {
          pagename: "Home",
          message: messages.successfullSignup,
        });
      })
      .catch((error) => {
        res.render("sign-up", {
          pagename: "Sign Up",
          message: error.response.data.error.message,
        });
      });
  } else {
    res.render("sign-up", {
      pagename: "Sign Up",
      body: req.body,
      errs: errors,
      messages: messages.failedSignup,
    });
  }
});

router.get("/about", (req, res) => {
  res.render("about", { pagename: "About" });
});

module.exports = router;
