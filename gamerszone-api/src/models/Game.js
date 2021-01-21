const { Model, DataTypes } = require('sequelize');

class Game extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        thumbnail: DataTypes.STRING
      },
      { sequelize, tableName: 'games' }
    );
  }
}

module.exports = Game;
