const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')


router.post('/signup', usersCtrl.create)
router.post('/login', usersCtrl.login)
router.post('/logout', usersCtrl.logout)

module.exports = router