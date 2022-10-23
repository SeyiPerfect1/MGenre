const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { errorHandler } = require("./src/middlewares/errorHandler.js");
const logger = require("morgan");
const path = require("path");

//instantiate express app
const app = express();

const PORT = process.env.PORT || 8000;

const userRouter = require('./src/routes/user')

app.use(logger("dev"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//middleware to serve public files
app.use(express.static(path.join(__dirname, "./src/public")));

//define routes
app.use("/", userRouter)

//invalid url route
app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "./src/public/error.html"));
  } catch (error) {
    next(error);
  }
});

// add error middleware
app.use(errorHandler());

//create server
app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
