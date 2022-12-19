const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

router.post('/register', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.get('/getall', usersCtrl.getAll)
router.get('/getone/:id', usersCtrl.getOne)
router.put('/update', usersCtrl.update)


module.exports = router;