const express = require('express')
const router = express.Router()
const animalCtrl = require('../controllers/animals')


router.post('/',animalCtrl.create)
router.get('/' , animalCtrl.index)
router.get('/:id',animalCtrl.update)
router.delete('/:id',animalCtrl.delete)
module.exports = router