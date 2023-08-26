const express = require("express");
const router = express.Router();
const {
  validateSignupData,
  validateLoginData,
} = require("../validation/validation");
const { isEmpty } = require("../utilities/util");
const messages = require("../utilities/messages");
const { postSignupData, postLoginData } = require("../services/userService");

router.get("/", (req, res) => {
  res.render("home", { pagename: "Home" });
});

router.get("/login", (req, res) => {
  res.render("login", { pagename: "Login" });
});

router.get("/sign-up", (req, res) => {
  res.render("sign-up", { pagename: "Sign Up" });
});
router.get("/about", (req, res) => {
  res.render("about", { pagename: "About" });
});

router.post("/login", async (req, res) => {
  const errors = validateLoginData(req.body);
  if (isEmpty(errors)) {
    try {
      const result = await postLoginData(req.body);
      res.render("home", {
        pagename: "Home",
        message: "successfull login",
      });
    } catch (error) {
      console.log(error.response.data);
      res.render("login", {
        pagename: "Login",
        message: error.response.data.message,
      });
    }
  } else {
    res.render("login", {
      pagename: "Login",
      body: req.body,
      errs: errors,
      message: "failed login",
    });
  }
});

router.post("/sign-up", (req, res) => {
  const errors = validateSignupData(req.body);
  if (isEmpty(errors)) {
    postSignupData(req.body)
      .then((result) => {
        res.render("login", {
          pagename: "login",
          message: "successfull signup",
        });
      })
      .catch((error) => {
        console.log(error.response.data);
        res.render("sign-up", {
          pagename: "Sign Up",
          message: error.response.data.message,
        });
      });
  } else {
    res.render("sign-up", {
      pagename: "Sign Up",
      body: req.body,
      errs: errors,
      message: "failed signup",
    });
  }
});

module.exports = router;
