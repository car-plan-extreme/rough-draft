var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mysql');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

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

app.post('/car', function (req, res) {
  console.log(req.body);
  items.addCar(function(err) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(200);
    }
  }, req.body)
});

app.post('/task', function (req, res) {
  console.log(req.body);
  items.addTask(function(err) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(200);
    }
  }, req.body)
});

app.post('/part', function (req, res) {
  console.log(req.body);
  items.addPart(function(err) {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(200);
    }
  }, req.body)
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

