const Movie = require('../models/Movie');

module.exports = {
  async store(req, res) {
    try {
      const { filename } = req.file;
      const { name, description } = req.body;

      const movieExist = await Movie.findOne({
        where: { name }
      });

      if (movieExist) 
        return res.status(409).json({ error: 'Movie already created!' });

      await Movie.create({
        name,
        description,
        thumbnail: filename
      });

      return res.status(201).json({ success: 'Movie successfully created' });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  async index(req, res) {
    try {
      const movies = await Movie.findAll();

      return res.status(200).json(movies);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
};
