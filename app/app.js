const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("../routes/router");

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
//midleware templating
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);

//satatic files for middleware use
app.use(express.static("public"));
app.use(express.static("views"));

app.use("/", router);

module.exports = app;
