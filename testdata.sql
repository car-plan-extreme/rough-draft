USE carApp;

INSERT INTO cars (make, model, year_produced, cost) 
  VALUES('Mazda', 'Mazda3', 2017, 20000),
  ('Mazda', 'MX-5 Miata', 2002, 6000),
  ('Chevy', 'Spark', 2018, 10000);

INSERT INTO tasks (car_id, task, due_date, ongoing, details, status_id)
  VALUES(1, 'Change oil', '2018-03-01', false, null, 1),
  (1, 'Fix windshield wipers', null, false, 'Make sure to take to the mechanic for recall', 2),
  (2, 'Install rollbar', null, false, null, 1),
  (3, 'Change oil', '2018-06-01', false, 'First oil change is free with the dealership', 2),
  (1, 'Change tires', null, false, null, 3);

INSERT INTO parts (part, date_bought, cost, status_id)
  VALUES('oil', '2018-03-15', 25, 3),
  ('oil filter','2018-03-15', 7, 3),
  ('rollbar', '2017-10-16', 200, 3),
  ('oil', '2018-05-05', 25, 1),
  ('blinker fluid', '2018-04-01', 8, 2);
