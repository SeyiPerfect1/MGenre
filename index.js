import bodyParser from 'body-parser';
import express from 'express';
import * as dotenv from "dotenv";
dotenv.config();
import { dbConnection } from './db.js';
import { errorHandler } from "./src/middlewares/errorHandler.js"


//instantiate express app
const app = express();

const PORT = process.env.PORT || 8000;

//initialize database
dbConnection()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

//serve public files
app.use(express.static('public'))



// add error middleware
app.use(errorHandler())

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`)
})






