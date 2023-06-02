const express = require('express')
const router = express.Router()
const authenticationMiddleware = require('../middleware/authentication')
const {login,dashboard} = require('../controller/controlle')


router.route('/login').post(login)
router.route('/dashboard').get(authenticationMiddleware,dashboard)

module.exports = router