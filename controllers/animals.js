const Animal = require("../models/animal");
const User = require('../models/user')
const fs = require('fs');


module.exports = {
  getAll,
  getOne,
  create,
  delete: deleteOne,
  userGetAll,
  update
};


async function getAll(req, res) {
  let animals = await Animal.find({}).populate({ path: 'userId' })
  res.json(animals);
}

async function getOne(req, res) {

  let animal = await Animal.findById(req.params.id).populate({ path: 'userId' })
  res.json(animal);
}

async function userGetAll(req, res) {
  try {
    let userRequests = await User.findById(req.params.userId).populate({ path: "requests" })
    res.status(200).json(userRequests);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function create(req, res) {
  image = ''
  if(req.file){
    image = `/images/upload/${req.file.filename}`
  }
  try {
    let animal = await Animal.create({
      title: req.body.title,
      location: { lat: req.body.lat, lng: req.body.lng },
      kind: req.body.kind,
      description: req.body.description,
      image: image,
      userId: req.body.userId
    });
    let user = await User.findById(req.body.userId)
    user.requests.push(animal._id);
    user.save();
    res.status(200).json(animal);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function deleteOne(req, res) {
  try {
    let animal = await Animal.findByIdAndDelete(req.params.animalId)
    fs.unlinkSync(`public${animal.image}`)
    let user = await User.findById(animal.userId)
    user.requests.remove(req.params.animalId)
    user.save()
    res.status(200).json('deleted')
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}


async function update(req, res) {
  try {
  let animal = await Animal.findById(req.body.id)
  animal.title = req.body.title
  animal.location = { lat: req.body.lat, lng: req.body.lng }
  animal.kind = req.body.kind
  animal.description = req.body.description
  animal.save()
    res.status(200).json(animal);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}
