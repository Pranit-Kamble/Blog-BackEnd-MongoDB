const Controller = require('../controllers/DataController')

const router  = require('express').Router()

router.get('/technology',Controller.TechnologyController)

module.exports = router