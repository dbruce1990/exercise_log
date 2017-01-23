const express = require('express')
const router = express.Router()
const user = require('../controllers/UserController')
const workouts = require('../controllers/WorkoutController')

router.get('/', workouts.getAll)
router.post('/new', workouts.create)

module.exports = router