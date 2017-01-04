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

CREATE TABLE workout_entries(
  workout_id INTEGER PRIMARY KEY,
  created_on NOT NULL DEFAULT now(),
  updated_on NOT NULL DEFAULT now(),
  workout_name VARCHAR,
  user_id INTEGER ON DELETE CASCADE
);

create table exercises(
  exercise_id INTEGER PRIMARY KEY,
  created_on NOT NULL DEFAULT now(),
  updated_on NOT NULL DEFAULT now(),
  exercise_name NOT NULL
);

create table workout_exercises(
  --implement cascading updates
   workout_id INTEGER ON DELETE CASCADE,
   exercise_id INTEGER ON DELETE CASCADE
);
