const controllers = {};

var sequelize = require("../model/db");
var post = require("../model/post");

// check if there're tables
sequelize.sync();

exports.create = function(req, res, next) {
  res.json({ data: "respond with a resource" });
};
