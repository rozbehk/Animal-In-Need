const express = require('express');
const router = express.Router();
const animalCtrl = require('../../controllers/animals');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/upload/")
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now() + "--" + file.originalname)
    }
})

const upload = multer({storage: storage})

router.post('/addrequest',upload.single('image'), animalCtrl.create);
router.put('/updaterequest',upload.single('image'), animalCtrl.update);
router.get('/getall', animalCtrl.getAll)
router.get('/getone/:id', animalCtrl.getOne)
router.get('/usergetall/:userId', animalCtrl.userGetAll)
router.delete('/delete/:animalId', animalCtrl.delete)


module.exports = router;



