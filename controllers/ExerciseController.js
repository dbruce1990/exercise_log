const db = require('../dbConn.js')
const dbErrorHandler = require('./dbErrorHandler.js')
const tokenHandler = require('./tokenHandler.js')

const defaultErrMsg = res => res
    .status(500)
    .json({error: "Erm, I have no idea.", content: null})

function create(req, res, next) {
    console.log(req.body)
    const query = "INSERT INTO exercises(exercise_name) VALUES($1)"
    const values = [req.body.exerciseName]
    db
        .none(query, values)
        .then(() => {
            res.json({message: "success"})
        })
        .catch(err => res.json({error: err}))
}

function getAll(req, res, next) {
    const query = "SELECT * FROM exercises"
    db
        .any(query)
        .then(data => res.json({exercises : data}))
        .catch(err => res.json({error: err}))
}

module.exports = {
    create: create,
    getAll: getAll
}