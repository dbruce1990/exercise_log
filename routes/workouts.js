const express = require('express')
const router = express.Router()
const workouts = require('../controllers/WorkoutController')

router.get('/', workouts.getAll)
router.post('/new', workouts.create)

module.exports = router