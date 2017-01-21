function dbErrorHandler(res, err) {
    console.log(err);
    switch (err.code) {
        case '23505':
            return res.status(409).json('duplicate entry').send()
        default:
            return res.status(500).send()
    }
}

module.exports = dbErrorHandler