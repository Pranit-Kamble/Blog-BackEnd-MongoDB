const Controller = require('../controllers/DataController')

const router  = require('express').Router()

router.get('/hollywood',Controller.HollywoodController)

module.exports = router