var express = require('express');
var router = express.Router();

var db = require('../dbConn');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', db.register);

router.post('/login', db.login);

module.exports = router;
