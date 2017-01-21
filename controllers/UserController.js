const db = require('../dbConn.js')
const dbErrorHandler = require('./dbErrorHandler.js')
const tokenHandler = require('./tokenHandler.js');
const bcrypt = require('bcryptjs')

const defaultErrMsg = res => res
    .status(500)
    .json({error: "Erm, I have no idea.", content: null})

function register(req, res, next) {
    //TODO: Ensure email has '@' and '.com' and passwords match db constraints.
    if (req.body.password === req.body.password_confirm) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) 
                defaultErrMsg(res)
            else {
                //hash was successful
                const query = 'INSERT INTO users (username, user_password_hash, user_email) VALUES ($1, $2, $3)'
                const values = [req.body.username, hash, req.body.email]
                db
                    .any(query, values)
                    .then(data => {
                        res.json({
                            error: null,
                            content: {
                                status: 'success'
                            }
                        })
                    })
                    .catch(err => dbErrorHandler(res, err))
            }

        })
    } else 
        res
            .status(500)
            .json({msg: "passwords do not match"})

    }

const invalidCredentialsErr = res => res.json({error: 'invalid email or password', content: null})
function login(req, res, next) {
    //get hash from db
    const query = 'SELECT user_password_hash FROM users WHERE user_email=$1'
    const values = [req.body.email]
    db
        .one(query, values)
        .then(data => {
            //compare password to hash
            bcrypt.compare(req.body.password, data.user_password_hash, (err, validPassword) => {
                if (err) 
                    //TODO: Learn how to handle bcrypt errors
                    defaultErrMsg(res)
                else {
                    if (validPassword) {
                        //passwords match so we can log them in
                        const payload = {
                            api_key: 'your api key'
                        }
                        tokenHandler.sign(payload, (err, token) => {
                            if (err) 
                                //TODO: Learn how to handle jsonwebtoken package error
                                defaultErrMsg(res)
                            else 
                                res.json({
                                    error: null,
                                    content: {
                                        token: token
                                    }
                                })
                        })

                    } else 
                        //passwords didn't match
                        invalidCredentialsErr(res)

                }
            })

        })
        .catch(err => {
            //invalid email
            invalidCredentialsErr(res)
        })
}

function authenticate(req, res, next){
    //validate token and api_key
}

module.exports = {
    register: register,
    login: login,
    authenticate: authenticate
}