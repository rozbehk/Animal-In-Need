const express = require('express')
const router = express.Router()
const usersCtrl = require('../controllers/users')
const userAnimals = require('../controllers/animals')
console.log('hit router')


router.post('/signup', usersCtrl.create)
router.post('/login', usersCtrl.login)
router.get('/animals' , userAnimals.index)

module.exports = router