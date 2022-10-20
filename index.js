import bodyParser from 'body-parser';
import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import { dbConnection } from './db.js';
import { errorHandler } from './src/middlewares/errorHandler.js';
import logger from 'morgan'
import path from 'path';
import { fileURLToPath } from 'url';


//instantiate express app
const app = express();

const PORT = process.env.PORT || 8000;

//initialize database
dbConnection()

app.use(logger('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

//serve public files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "./src/public")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './src/public/error.html'));
  });

// add error middleware
app.use(errorHandler())

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`)
})






