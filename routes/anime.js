const Controller = require('../controllers/DataController')

const router  = require('express').Router()

router.get('/anime',Controller.AnimeController)

module.exports = router