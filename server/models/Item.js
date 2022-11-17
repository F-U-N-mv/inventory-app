const {sequelize} = require('../db');
const {Sequelize} = require("sequelize");


//Create the Item model 
const Item = sequelize.define("item", {
  title: Sequelize.STRING,
  /**
   *  For the data type for `price` below, I don't think this needs to be STRING.
   *  I think, based on the docs, it can be NUMBER or REAL
   *  https://sequelize.org/docs/v7/other-topics/other-data-types
   */ 
  price: Sequelize.NUMBER, //Have to make price a string, JS does not accept DECIMAL data type
  description: Sequelize.STRING,
  category: Sequelize.STRING,
  image: Sequelize.STRING


});

module.exports = { Item };