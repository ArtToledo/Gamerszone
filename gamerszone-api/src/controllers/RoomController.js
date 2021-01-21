const Room = require('../models/Room');

module.exports = {
  async store(req, res) {
    try {
      const { typeRoom } = req.query;
      const { name, vacancies, timetable, idGame, idMovie, urlCommunication } = req.body;

      const data = {
        name,
        vacancies,
        timetable,
        urlCommunication
      };

      if (typeRoom === 'game') {
        data.idGame = idGame;
      } else {
        data.idMovie = idMovie;
      };

      const room = await Room.create(data);

      return res.status(201).json(room);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async index(req, res) {
    try {
      const { typeRoom, idGame, idMovie } = req.query;

      let rooms;

      if (typeRoom === 'game') {
        rooms = await Room.findAll({
          where: {
            idGame
          }
        });
      } else {
        rooms = await Room.findAll({
          where: {
            idMovie
          }
        });
      };

      return res.status(201).json(rooms);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
};
