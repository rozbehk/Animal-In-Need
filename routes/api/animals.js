const express = require('express')
const router = express.Router()
const animalCtrl = require('../../controllers/api/animals')

// router.delete('/deleteAnimal/:animalid',animalCtrl.delete)
router.post('/:id',animalCtrl.create)
router.get('/' , animalCtrl.index)
router.post('/',animalCtrl.create)
router.put('/:id',animalCtrl.update)
router.delete('/delete/:id',animalCtrl.delete)
module.exports = router