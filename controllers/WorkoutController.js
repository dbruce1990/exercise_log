const db = require('../dbConn.js')
const dbErrorHandler = require('./dbErrorHandler.js')
const tokenHandler = require('./tokenHandler.js')


const defaultErrMsg = res => res
    .status(500)
    .json({error: "Erm, I have no idea.", content: null})

function create(req, res, next) {
    res.json(req.body)
}

module.exports = {
    create: create
}