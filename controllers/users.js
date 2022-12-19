const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  create,
  login,
  getAll,
  getOne,
  update
};

async function create(req, res) {
  let message = null

  try {
    if(await User.findOne({ email: req.body.email })){
      message = 'Email Addres Already Taken'
      throw new Error ()
    }
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      parseInt(process.env.SALT_ROUNDS)
    );
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      rescuer: req.body.rescuer,
      admin: false
    });
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(message);
  }
}

async function login(req, res) {
  message = 'bad request'

  try {
    const user = await User.findOne({ email: req.body.email });
    if(!(await User.findOne({ email: req.body.email }))){
      message = 'Email not exist'
      throw new Error()
    } 
    if (await User.findOne({ email: req.body.email }) && !(await bcrypt.compare(req.body.password, user.password))){
      message = 'Bad Password'
      throw new Error()
    } 
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json(token);
  } catch(err) {
    res.status(400).json(message);
  }
}

async function getAll(req, res) {
  let users = await User.find({});
  res.json(users);
}

async function getOne(req, res){
  let user = await User.findById(req.params.id)
  res.json(user)
}

async function update(req, res){
  try {
    const user = await User.findOne({ email: req.body.email });
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      parseInt(process.env.SALT_ROUNDS)
    );
    user.name = req.body.name
    user.password = hashedPassword
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    user.save()
    res.status(200).json(token);
  }catch(err){
    res.status(400).json(err);
  }
  


}
