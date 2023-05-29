const dbconfig = require("../config/database");
const mongoose = require("mongoose");

module.exports = {
  mongoose,
  url: dbconfig.url,
  football: require("./football.models.js")(mongoose),
};
