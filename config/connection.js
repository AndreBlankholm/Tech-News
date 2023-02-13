// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();  //do NOt have to save into a variable, just use it when we connect-- requiring the dotenv package to help with the env files to keep secret.

// create connection to our db // using the env file variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;