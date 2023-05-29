module.exports = (app) => {
  const text = require("../controller/text.controller");
  const r = require("express").Router();

  r.post("/addtext", text.addText);

  app.use("/text", r);
};
