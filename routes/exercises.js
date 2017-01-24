const express = require('express')
const router = express.Router()
const exercises = require('../controllers/ExerciseController')

router.get('/', exercises.getAll)
router.post('/new', exercises.create)

module.exports = router