const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

console.log("hit control");

module.exports = {
  create,
  login,
  logout,
};

async function create(req, res) {
  try {
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      parseInt(process.env.SALT_ROUNDS)
    );
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      type: req.body.type,
    });
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "48h" });
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!(await bcrypt.compare(req.body.password, user.password)))
      throw new Error("Bad Password");
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "48h" });
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function logout(req, res) {
  try {
    localStorage.removeItem('token')
    res.json(200)
  } catch (err) {
    res.status(400).json(err);
  }
}

