const db = require('../dbConn.js')

const jwt = require('jsonwebtoken')
const jwt_key = 'Someday, I should probably think of a really, really, good phrase for this.'

function register(req, res, next) {
    if (req.body.password === req.body.password_confirm) {
        const query = 'INSERT INTO users (user_name, user_password_hash, user_email) VALUES ($1, $2, $3' +
                ')'
        const values = [req.body.username, req.body.password, req.body.user_email]

        db
            .any(query, values)
            .then(data => {
                res.json({status: 'success'})
            })
            .catch(err => {
                console.log(err)
                return next(err)
            })
    }
}

function login(req, res, next) {
    const username = req.body.username
    const password = req.body.password

    const query = 'SELECT user_name FROM users WHERE user_name=$1 AND user_password_hash=$2'
    const values = [username, password]

    db
        .any(query, values)
        .then(data => {
            const payload = {
                data: data
            }
            const token = jwt.sign(payload, jwt_key, null, (err, token) => {
                if (err) 
                    console.log(err)
                res.json({token: token})
            });
        })
        .catch(err => {
            console.log(err)
            return next(err)
        })
}

module.exports = {
    register: register,
    login: login
}