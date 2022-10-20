import { CONFIG } from "./src/config/dbConfig.js"
import { Sequelize } from "sequelize"

const sequelize = new Sequelize(CONFIG.database, CONFIG.username, CONFIG.password, {
    host: CONFIG.host,
    dialect: CONFIG.dialect
  });

const dbConnection = async () => {
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    } catch (error) {
    console.error('Unable to connect to the database:', error);
    next(error)
  }
}

export { dbConnection };