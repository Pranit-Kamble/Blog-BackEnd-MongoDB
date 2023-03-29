const Controller = require('../controllers/DataController')

const router  = require('express').Router()

router.get('/bollywood',Controller.BollywoodController)

module.exports = router