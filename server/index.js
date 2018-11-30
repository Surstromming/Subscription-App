const mongoose = require('mongoose');
const dotenv = require('dotenv');

// import environmental variables from our variables.env file
dotenv.config({ path: './server/.env' });

// Connect to our Database and handle any bad connections
mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', err => {
  console.error(`🚫 🚫 🚫 → ${err.message}`);
});

// import all models
require('./models/Country');
require('./models/DeliveryMoment');

const express = require('express');
const path = require('path');
const app = express();

const routes = require('./router/router');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, '../dist/')));
app.use('/', routes);

app.listen(process.env.PORT, () => console.log(`API is running on port ${process.env.PORT}!`))

module.exports = app;

