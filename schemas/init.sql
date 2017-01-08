DROP DATABASE IF EXISTS exercise_log_app;
CREATE DATABASE exercise_log_app;
\c exercise_log_app;

DROP ... CASCADE TABLE IF EXISTS users, workouts, exercises, workout_exercises;
CREATE TABLE users(
  user_id serial PRIMARY KEY,
  user_email VARCHAR UNIQUE NOT NULL,
  user_name VARCHAR UNIQUE NOT NULL,
  user_password_hash VARCHAR NOT NULL,
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

--SEED DATA--

INSERT INTO exercises (exercise_name) VALUES ('push up');
INSERT INTO exercises (exercise_name) VALUES ('squat');
INSERT INTO exercises (exercise_name) VALUES ('pull up');
INSERT INTO exercises (exercise_name) VALUES ('horizontal row');
INSERT INTO exercises (exercise_name) VALUES ('thinking');
INSERT INTO exercises (exercise_name) VALUES ('hurts');
INSERT INTO exercises (exercise_name) VALUES ('cat stretch');
INSERT INTO exercises (exercise_name) VALUES ('what exercise?');

INSERT INTO users (user_email, user_name, user_password_hash) VALUES ('fake@email.com', 'dustin', 'abc123');
INSERT INTO users (user_email, user_name, user_password_hash) VALUES ('email@server.com', 'clayton', 'incorrect');
INSERT INTO users (user_email, user_name, user_password_hash) VALUES ('google@gmail.com', 'momma', 'secret');
INSERT INTO users (user_email, user_name, user_password_hash) VALUES ('email@place.com', 'Jacee', 'pass');


INSERT INTO workouts (workout_name) VALUES ('dustins workout');
INSERT INTO workouts (workout_name) VALUES ('jacees workout');
INSERT INTO workouts (workout_name) VALUES ('claytons workout');
INSERT INTO workouts (workout_name) VALUES ('reddit recommended routine');
INSERT INTO workouts (workout_name) VALUES ('random workout 2');
INSERT INTO workouts (workout_name) VALUES ('sadie stretches');
