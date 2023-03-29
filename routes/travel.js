const Controller = require('../controllers/DataController')

const router  = require('express').Router()

router.get('/travel',Controller.TravelController)

module.exports = router