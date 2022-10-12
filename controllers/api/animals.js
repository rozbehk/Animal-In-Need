const Animal = require('../../models/Animal')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "./public/img/")

    },
    filename: (req, file ,cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage: storage})


module.exports = {
    index,
    create,
    delete:deleteOne,
    update

}

async function index (req, res){
    Animal.find({}, function(err,animals){
        if(err){
            res.status(500).json(err)
    
        }
        res.json(animals).status(200)
    }).sort({createdAt: -1})
    
}

async function create (req, res){
    req.body.image = 
    await Animal.create(req.body, function(err, animal){
        res.status(200).json('ok')
    })    
}

async function deleteOne (req, res){
    console.log(req.body)
    await Animal.findByIdAndDelete(req.body.id, function(err, serie) {
        res.status(200).json('animal deleted')
    });
}
    
async function update(req,res){
    console.log('done')
}
