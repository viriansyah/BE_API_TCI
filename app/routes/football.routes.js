module.exports = (app) => {
  const football = require("../controller/football.controller");
  const r = require("express").Router();

  r.post("/addclub", football.addClub);
  r.post("/recordgame", football.recordGame);
  r.get("/leaguestanding", football.leagueStanding);
  r.get("/rank", football.rankClub);

  app.use("/football", r);
};
