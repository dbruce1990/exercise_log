const db = require('../dbConn.js')
const dbErrorHandler = require('./dbErrorHandler.js')
const tokenHandler = require('./tokenHandler.js')

const defaultErrMsg = res => res
    .status(500)
    .json({error: "Erm, I have no idea.", content: null})

function create(req, res, next) {
    const query = "INSERT INTO workouts(workout_name) VALUES($1)"
    const values = [req.body.workoutName]
    db
        .none(query, values)
        .then(() => {
            
            res.json({
                error: null,
                content: {
                    message: "success"
                }
            })
        })
        .catch(err => res.json({error: err}))
}

function getAllWorkouts(req, res, next) {
    const query = "SELECT * FROM workouts"
    db
        .any(query)
        .then(data => res.json({
            error: null,
            workouts: data
        }))
        .catch(err => res.json({error: err}))
}

module.exports = {
    create: create,
    getAll: getAllWorkouts
}