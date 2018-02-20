require('dotenv').config({ path: './server/.env' });
const {PORT} = process.env;

const express = require('express');
const path = require('path');
const app = express();

const routes = require('./router/router');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, '../dist/')));
app.use('/', routes);

app.listen(PORT, () => console.log(`API is running on port ${PORT}!`))

module.exports = app;

