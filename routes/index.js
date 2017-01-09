const express = require('express');
const router = express.Router();

const db = require('../dbConn');

/* GET home page. */
router.get('*', function (req, res) {
  res.render('index');
});

router.post('/register', db.register);

router.post('/login', db.login);

module.exports = router;
