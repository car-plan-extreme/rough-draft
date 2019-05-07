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

var addCar = function(callback, req) {
  connection.query(`INSERT INTO cars (make, model, year_produced, cost) VALUES ("${req.make}", "${req.model}", ${req.year_produced}, ${req.cost ? req.cost : 'null'})`,
  callback);
};

var addTask = function(callback, req) {
  connection.query(`INSERT INTO tasks (car_id, task, due_date, ongoing, details, status_id) VALUES ("${req.car_id}", "${req.task}", ${req.due_date ? '"' + req.due_date + '"': 'null'}, ${req.ongoing === 'on'}, ${req.details ? req.details : 'null'}, ${req.status_id})`,
  callback);
}

var addPart = function(callback, req) {
  connection.query(`INSERT INTO parts (part, date_bought, cost, status_id) VALUES ("${req.part}", ${req.date_bought === 'null' ? '"' + req.date_bought + '"': 'null'}, ${req.cost ? req.cost : 'null'}, ${req.status_id})`,
  callback);
};

module.exports.selectAllCars = selectAllCars;
module.exports.selectAllTasks = selectAllTasks;
module.exports.selectAllParts = selectAllParts;
module.exports.addCar = addCar;
module.exports.addTask = addTask;
module.exports.addPart = addPart;
