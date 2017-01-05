var promise = require('bluebird');

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

function register(req, res, next){
  if(req.body.password === req.body.password_confirm){
    let query = 'INSERT INTO users (username, password) VALUES ($1, $2)';
    let values = [req.body.username, req.body.password];
    db.any(query, values)
      .then(data => {
        res.json({data: data});
      })
      .catch(err => {
        console.log(err);
        return next(err);
      });
  }
}

function login(req, res, next){
  let username = req.body.username;
  let password = req.body.password;

  let query = 'SELECT username FROM users WHERE username=$1 AND password=$2';
  let values = [username, password];
  db.any(query, values)
    .then(data => {
      res.json({data: data});
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
