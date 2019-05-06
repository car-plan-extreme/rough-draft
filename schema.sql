DROP DATABASE IF EXISTS carApp;

CREATE DATABASE carApp;

USE carApp;

CREATE TABLE cars (
  id int NOT NULL AUTO_INCREMENT,
  make varchar(50) NOT NULL,
  model varchar(255) NOT NULL,
  [year] year NOT NULL,
  cost int,
  PRIMARY KEY (id)
);

CREATE TABLE tasks (
  id int NOT NULL AUTO_INCREMENT,
  car_id int NOT NULL,
  task varchar(255) NOT NULL,
  due_date date,
  ongoing boolean NOT NULL,
  details text,
  status_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (status_id)
    REFERENCES task_statuses(id)
);

CREATE TABLE parts (
  id int NOT NULL AUTO_INCREMENT,
  date_bought date,
  cost int,
  status_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (status_id)
    REFERENCES part_statuses(id)
);

CREATE TABLE task_statuses (
  id int NOT NULL,
  [status] varchar(50) NO NULL,
  PRIMARY KEY (id)
);

CREATE TABLE part_statuses (
  id int NOT NULL,
  [status] varchar(50) NO NULL,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
