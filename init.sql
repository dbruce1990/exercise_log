DROP DATABASE IF EXISTS exercise_log_app;
CREATE DATABASE exercise_log_app;
\c exercise_log_app;

CREATE TABLE users(
  user_id INTEGER PRIMARY KEY,
  user_email VARCHAR UNIQUE,
  user_password_hash VARCHAR UNIQUE,
  created_on NOT NULL DEFAULT now(),
  updated_on NOT NULL DEFAULT now()
);

CREATE TABLE journal_entries(
  journal_entry_id INTEGER PRIMARY KEY,
  created_on NOT NULL DEFAULT now(),
  updated_on NOT NULL DEFAULT now()
);

CREATE TABLE journal(
  journal_id INTEGER PRIMARY KEY,
  user_id INTEGER REFERENCES users ON DELETE CASCADE
);

CREATE TABLE workouts(
  workout_id INTEGER PRIMARY KEY,
  created_on NOT NULL DEFAULT now(),
  updated_on NOT NULL DEFAULT now(),
  workout_name VARCHAR NOT NULL
);

CREATE TABLE exercises(
  exercise_id INTEGER PRIMARY KEY,
  created_on NOT NULL DEFAULT now(),
  updated_on NOT NULL DEFAULT now(),
  exercise_name VARCHAR NOT NULL
);

CREATE TABLE workout_exercises(
  --implement cascading updates
   workout_id INTEGER REFERENCES workouts ON DELETE CASCADE,
   exercise_id INTEGER REFERENCES exercises ON DELETE CASCADE
);
