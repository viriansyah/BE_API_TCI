const express = require("express");
const cors = require("cors");

const db = require("./app/models");

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

//konek db
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

db.mongoose
  .connect(db.url, mongooseConfig)
  .then(() => console.log("db konek"))
  .catch((err) => {
    console.log(`gagal konek ${err.message}`);
    process.exit();
  });

require("./app/routes/football.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
