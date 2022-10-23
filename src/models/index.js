'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/dbConfig');
const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }
let sequelize;
if (process.env.NODE_ENV === "development") {
  sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: config.development.host,
    dialect: config.development.dialect,
  });
} else if (process.env.NODE_ENV === "test") {
  sequelize = new Sequelize(process.env.TEST_DATABASE_URL);
} else {
  sequelize = new Sequelize(process.env.DATABASE_URL);
}

sequelize.authenticate()
    .then(() => {
        console.log(`Connection has been established successfully.`)
    }).catch((error) => {
        console.log(`Unable to connect to the database:`, error)
    })

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync({ force: false })
.then(() => {
    console.log('Database & tables synced')
}).catch(err => {
    console.error('unable to sync databases & tables', err)
})

module.exports = db;
