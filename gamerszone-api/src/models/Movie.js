const { Model, DataTypes } = require('sequelize');

class Movie extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        description: DataTypes.STRING
      },
      { sequelize, tableName: 'movies' }
    );
  }
}

module.exports = Movie;
