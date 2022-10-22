const dotenv = require('dotenv');
dotenv.config();

const CONFIG = {
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.HOST,
    dialect: process.env.DIALECT
}

module.exports = CONFIG;



