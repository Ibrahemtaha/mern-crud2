var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");
const sequelize = require("./models/db");
require("dotenv").config();

var db = require("./models/db");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var postRouter = require("./routes/post");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", postRouter);

sequelize
  .sync()
  .then(reslut => {
    //console.log(reslut);
    app.listen(3000);
  })
  .catch(error => {
    //console.log(error);
  });
module.exports = app;
