const Game = require('../models/Game');

module.exports = {
  async store(req, res) {
    try {
      const { filename } = req.file;
      const { name } = req.body;

      const gameExist = await Game.findOne({
        where: { name }
      });

      if (gameExist) 
        return res.status(409).json({ error: 'Game already created!' });

      await Game.create({
        name,
        thumbnail: filename
      });

      return res.status(201).json({ success: 'Game successfully created' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async index(req, res) {
    try {
      const games = await Game.findAll();

      return res.status(200).json(games);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
};
