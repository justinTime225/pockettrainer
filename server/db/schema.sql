DROP DATABASE IF EXISTS puppies;
CREATE DATABASE puppies;

\c puppies;

CREATE TABLE pups (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  breed_name VARCHAR,
  age INTEGER,
  sex VARCHAR
);

INSERT INTO pups (name, breed_name, age, sex)
  VALUES ('Tyler', 'Retrieved', 3, 'M');



DROP DATABASE IF EXISTS training;
CREATE DATABASE training;

\c training;

CREATE TABLE chest (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  set_min INTEGER,
  set_max INTEGER,
  light_rep_min INTEGER,
  light_rep_max INTEGER,
  heavy_rep_min INTEGER,
  heavy_rep_max INTEGER,
  break_under_min INTEGER,
  core INTEGER,
  superset INTEGER

);

INSERT INTO chest (name, set_min, set_max, light_rep_min, light_rep_max, 
          heavy_rep_min, heavy_rep_max, break_under_min, core, superset)
  VALUES ("Incline Press", 4, 5, 8, 12, 4, 6, 1, 1, 2);


