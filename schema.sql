DROP DATABASE IF EXISTS carApp;

CREATE DATABASE carApp;

USE carApp;

CREATE TABLE cars (
  id int NOT NULL AUTO_INCREMENT,
  make varchar(50) NOT NULL,
  model varchar(255) NOT NULL,
  year_produced year NOT NULL,
  cost int,
  PRIMARY KEY (id)
);

CREATE TABLE task_statuses (
  id int NOT NULL,
  status_code varchar(50) NOT NULL,
  PRIMARY KEY (id)
);
INSERT INTO task_statuses (id, status_code) VALUES(1, 'Complete'),(2, 'Pending'),(3, 'Missing Parts');

CREATE TABLE tasks (
  id int NOT NULL AUTO_INCREMENT,
  car_id int NOT NULL,
  task varchar(255) NOT NULL,
  due_date date,
  ongoing boolean NOT NULL,
  details text,
  status_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (car_id)
    REFERENCES cars(id),
  FOREIGN KEY (status_id)
    REFERENCES task_statuses(id)
);

CREATE TABLE part_statuses (
  id int NOT NULL,
  status_code varchar(50) NOT NULL,
  PRIMARY KEY (id)
);
INSERT INTO part_statuses (id, status_code) VALUES(1, 'Obtained'),(2, 'Pending'),(3, 'Used');

CREATE TABLE parts (
  id int NOT NULL AUTO_INCREMENT,
  part varchar(50) NOT NULL,
  date_bought date,
  cost int,
  status_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (status_id)
    REFERENCES part_statuses(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
