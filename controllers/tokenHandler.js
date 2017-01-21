const jwt = require('jsonwebtoken')

const jwt_key = 'Someday, I should probably think of a really, really, good phrase for this.'

function sign(payload, callback) {
    return jwt.sign(payload, jwt_key, null, callback)
}

module.exports = {
    sign: sign
}