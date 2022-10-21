import * as dotenv from 'dotenv';
dotenv.config()

export const CONFIG = {
    database: process.env.DATABASE,
    username: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
    host: process.env.HOST,
    dialect: process.env.DIALECT
}



