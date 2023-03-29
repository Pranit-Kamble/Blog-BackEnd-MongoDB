const Controller = require('../controllers/DataController')

const router  = require('express').Router()

router.get('/food',Controller.FoodController)

module.exports = router