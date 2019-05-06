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

var selectAllTasks = function(callback) {
  connection.query('SELECT * FROM tasks', function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectAllParts = function(callback) {
  connection.query('SELECT * FROM parts', function(err, results, fields) {
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
