const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

module.exports = app;