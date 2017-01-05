\c exercise_log_app;
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,
  username VARCHAR,
  password VARCHAR,
  UNIQUE(username)
);
