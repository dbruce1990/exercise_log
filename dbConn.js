const promise = require('bluebird')

const options = {
  promiseLib: promise
}

const pgp = require('pg-promise')(options)
const connectionString = {
  host: 'localhost',
  port: 5432,
  database: 'exercise_log_app',
  user: 'postgres',
  password: 'root'
}
const db = pgp(connectionString)

module.exports = db
