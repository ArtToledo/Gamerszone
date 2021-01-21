const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const GameController = require('./controllers/GameController');
const MovieController = require('./controllers/MovieController');
const RoomController = require('./controllers/RoomController');

const router = express.Router();
const upload = multer(uploadConfig);

// Games
router.get('/games', GameController.index);
router.post('/games', upload.single('thumbnail'), GameController.store);
// Movies
router.get('/movies', MovieController.index);
router.post('/movies', upload.single('thumbnail'), MovieController.store);
// Rooms
router.get('/rooms', RoomController.index);
router.post('/rooms', RoomController.store);

module.exports = router;