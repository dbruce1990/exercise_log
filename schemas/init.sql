DROP DATABASE IF EXISTS exercise_log_app;
CREATE DATABASE exercise_log_app;
\c exercise_log_app;

CREATE TABLE users(
  user_id serial PRIMARY KEY,
  user_email VARCHAR UNIQUE,
  user_name VARCHAR UNIQUE,
  user_password_hash VARCHAR,
  created_on TIMESTAMP NOT NULL DEFAULT now(),
  updated_on TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE workouts(
  workout_id serial PRIMARY KEY,
  user_id INTEGER REFERENCES users ON DELETE CASCADE,
  created_on TIMESTAMP NOT NULL DEFAULT now(),
  updated_on TIMESTAMP NOT NULL DEFAULT now(),
  workout_name VARCHAR NOT NULL
);

CREATE TABLE exercises(
  exercise_id serial PRIMARY KEY,
  created_on TIMESTAMP NOT NULL DEFAULT now(),
  updated_on TIMESTAMP NOT NULL DEFAULT now(),
  exercise_name VARCHAR NOT NULL
);

CREATE TABLE workout_exercises(
  --implement cascading updates
   workout_id serial REFERENCES workouts ON DELETE CASCADE,
   exercise_id serial REFERENCES exercises ON DELETE CASCADE
);
