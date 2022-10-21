import { CONFIG } from "./config.js";
import { Sequelize, DataTypes } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

let sequelize;
if (process.env.NODE_ENV === "development") {
  sequelize = new Sequelize(CONFIG.database, CONFIG.username, CONFIG.password, {
    host: CONFIG.host,
    dialect: CONFIG.dialect,
  });
} else if (process.env.NODE_ENV === "test") {
  sequelize = new Sequelize(process.env.TEST_DATABASE_URL);
} else {
  sequelize = new Sequelize(process.env.DATABASE_URL);
}

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Add our tables
// db.books = require('./book')(sequelize, DataTypes);

// sync all models
// force: false will not drop the table if it already exists
db.sequelize
  .sync() //{ force: false }
  .then(() => {
    console.log("Database & tables synced");
  })
  .catch((err) => {
    console.error("Unable to sync database & tables:", err);
  });

module.exports = db;
