const { Sequelize } = require('sequelize');
const sequelize = require('../config');

const User = require('./user');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = User(sequelize, Sequelize.DataTypes);

module.exports = db;
