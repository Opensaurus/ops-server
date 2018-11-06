const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// Connect Database

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(keys.mongoURI, { useMongoClient: true });
}

// Configure Server

const app = express();
app.use(bodyParser.json());

require('./models');
require('./config/server')(app, keys.cookieKey);
require('./controllers')(app);

app.on('uncaughtException', (req, res, next, err) => {
  res.send({
    status: res.statusCode ? res.statusCode.toString() : '500',
    message: err.toString()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
