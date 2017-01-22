const express = require('express')
const router = express.Router()
const user = require('../controllers/UserController')
const workouts = require('../controllers/WorkoutController')

/* GET home page. */
router.get('*', (req, res) => res.render('index'))
router.post('/register', user.register)
router.post('/login', user.login)

/* /workouts */
router.post('/workouts/new', workouts.create)

module.exports = router;
