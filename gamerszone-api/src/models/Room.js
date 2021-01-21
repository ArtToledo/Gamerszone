const { Model, DataTypes } = require('sequelize');

class Room extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        vacancies: DataTypes.INTEGER,
        timetable: DataTypes.STRING,
        urlCommunication: DataTypes.STRING
      },
      { sequelize, tableName: 'rooms' }
    );
  }

  static associate(models) {
    this.belongsTo(models.Game, {
      foreignKey: 'idGame',
      as: 'game'
    })
    this.belongsTo(models.Movie, {
      foreignKey: 'idMovie',
      as: 'movie'
    })
  }
}

module.exports = Room;
