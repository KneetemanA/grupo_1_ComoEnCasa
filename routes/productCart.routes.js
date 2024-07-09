const express = require('express')
const router = express.Router()
const cartController = require('../controllers/productCart')



router.get('/', cartController.productCart)

module.exports = router