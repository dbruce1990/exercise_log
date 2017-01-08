var promise = require('bluebird');
var jwt = require('jsonwebtoken');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = {
  host: 'localhost',
  port: 5432,
  database: 'exercise_log_app',
  user: 'postgres',
  password: 'root'
};
var db = pgp(connectionString);

function register(req, res, next) {
  if (req.body.password === req.body.password_confirm) {
    let query = 'INSERT INTO users (user_name, user_password_hash, user_email) VALUES ($1, $2, $3)';
    let values = [
      req.body.username,
      req.body.password,
      req.body.user_email
    ];
    db.any(query, values)
      .then(data => {
        res.json({ status: 'success' });
      })
      .catch(err => {
        console.log(err);
        return next(err);
      });
  }
}

function login(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;

  let query = 'SELECT user_name FROM users WHERE user_name=$1 AND user_password_hash=$2';
  let values = [username, password];
  db.any(query, values)
    .then(data => {
      var token = jwt.sign({ foo: 'bar' },
        'shhhhh', null, (err, token) => {
          if (err) console.log(err);
          console.log(token)
        });
      res.json({ key: "unique key" });
    })
    .catch(err => {
      console.log(err);
      return next(err);
    });
}

module.exports = {
  register: register,
  login: login
};
