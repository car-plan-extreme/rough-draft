var mysql = require('mysql');
var database = require('../databaseConfig.js');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : database.password,
  database : 'carApp'
});

connection.connect((err) => {
  if (err) console.log('error connecting: ',err.stack)
})

var selectAllCars = function(callback) {
  connection.query('SELECT * FROM cars', function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const taskQuery = 'SELECT t.id AS id, c.model AS car, t.task AS task, t.due_date AS due_date, t.ongoing AS ongoing, t.details AS details, s.status_code AS status FROM tasks t INNER JOIN cars c ON t.car_id = c.id INNER JOIN task_statuses s ON t.status_id = s.id';
var selectAllTasks = function(callback) {
  connection.query(taskQuery, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const partsQuery = 'SELECT p.*, s.status_code AS status FROM parts p INNER JOIN part_statuses s ON p.status_id = s.id';
var selectAllParts = function(callback) {
  connection.query(partsQuery, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAllCars = selectAllCars;
module.exports.selectAllTasks = selectAllTasks;
module.exports.selectAllParts = selectAllParts;
