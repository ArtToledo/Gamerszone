const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const Game = require('../models/Game');
const Movie = require('../models/Movie');
const Room = require('../models/Room');

const connection = new Sequelize(dbConfig);

Game.init(connection);
Movie.init(connection);
Room.init(connection);

Room.associate(connection.models);

module.exports = connection;