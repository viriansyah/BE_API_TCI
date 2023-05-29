const db = require("../models");
const Football = db.football;

exports.addClub = async (req, res) => {
  try {
    const { clubname, points } = req.body;
    const football = new Football({
      clubname,
      points,
    });
    const newFootball = await football.save();
    res.status(200).json({ message: "Club recorded in MongoDB", newFootball });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.recordGame = async (req, res) => {
  try {
    const { clubhomename, clubawayname, score } = req.body;

    const [homescore, awayscore] = score.split(";");
    const homescoreInt = parseInt(homescore);
    const awayscoreInt = parseInt(awayscore);

    let winner = "";
    let points = 0;

    if (homescoreInt > awayscoreInt) {
      winner = clubhomename;
      points = 3;
    } else if (awayscoreInt > homescoreInt) {
      winner = clubawayname;
      points = 3;
    } else if (awayscoreInt == homescoreInt) {
      points = 1;
    } else {
      points = 0;
    }

    const football = new Football({
      clubhomename,
      clubawayname,
      score,
      points,
      winner,
    });

    const newFootball = await football.save();
    res.status(200).json({ message: "Game recorded in MongoDB", newFootball });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.leagueStanding = async (req, res) => {
  try {
    const clubs = await Football.find().sort({ points: -1 });
    res.json(clubs);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.rankClub = async (req, res) => {
  try {
    const { clubname } = req.query;
    const club = await Football.findOne({ name: clubname });
    if (club) {
      res.json({ clubName: club.name });
    } else {
      res.status(404).json({ error: "Club not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
