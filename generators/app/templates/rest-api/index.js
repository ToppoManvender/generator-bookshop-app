const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const createError = require("http-errors");

const app = express();

const bookRoute = require("./node-backend/routes/book.routes");
const mongoDb = require("./database/db");
const eventRoute = require("./node-backend/routes/event.routes");

mongoose.Promise = global.Promise;
mongoose
  .connect(mongoDb.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Could not connect" + error);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(express.static(path.join(__dirname, "dist/Bookstore")));
app.use("/api", bookRoute);
app.use("/alert", eventRoute);

const port = `<%= portNumber %>` ;
app.listen(port, () => {
  console.log("Listening on Port: " + port);
});

app.use((_req, _res, next) => {
  next(createError(404));
});

app.use(function (err, res) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
