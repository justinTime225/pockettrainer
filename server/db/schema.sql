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
  superset_type VARCHAR,
  superset_ID INTEGER,
  build_type VARCHAR
);

INSERT INTO chest (name, set_min, set_max, light_rep_min, light_rep_max, 
heavy_rep_min, heavy_rep_max, break_under_min, core, superset_type, superset_ID, build_type)
  VALUES ('InclinePress', 4, 5, 8, 12, 4, 6, 1, 1, 'Bicep', 2, 'Bulk');

INSERT INTO chest (name, set_min, set_max, light_rep_min, light_rep_max, 
heavy_rep_min, heavy_rep_max, break_under_min, core, superset_type, superset_ID, build_type)
  VALUES ('FlatPress', 4, 5, 8, 12, 4, 6, 1, 1, 'Bicep', 2, 'Bulk');

INSERT INTO chest (name, set_min, set_max, light_rep_min, light_rep_max, 
heavy_rep_min, heavy_rep_max, break_under_min, core, superset_type, superset_ID, build_type)
  VALUES ('DeclinePress', 4, 5, 8, 12, 4, 8, 1, 1, 'Bicep', 2, 'Bulk');

INSERT INTO chest (name, set_min, set_max, light_rep_min, light_rep_max, 
heavy_rep_min, heavy_rep_max, break_under_min, core, superset_type, superset_ID, build_type)
  VALUES ('ChestFlyes', 3, 4, 15, 20, 5, 10, 1, 0, 'Chest', 5, 'Tone');

INSERT INTO chest (name, set_min, set_max, light_rep_min, light_rep_max, 
heavy_rep_min, heavy_rep_max, break_under_min, core, superset_type, superset_ID, build_type)
  VALUES ('Dips', 3, 4, 6, 12, 15, 20, 1, 0, 'Chest', 2, 'Tone');










