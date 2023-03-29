const Controller = require('../controllers/DataController')

const router  = require('express').Router()

router.get('/',Controller.HomeController)

module.exports = router