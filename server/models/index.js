const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')
const {Item} = require('./Item');







module.exports = {
  sequelize,
  Item
};