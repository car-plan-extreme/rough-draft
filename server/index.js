var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/cars', function (req, res) {
  items.selectAllCars(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/tasks', function (req, res) {
  items.selectAllTasks(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/parts', function (req, res) {
  items.selectAllParts(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

