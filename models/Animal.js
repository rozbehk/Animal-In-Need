const mongoose = require('mongoose')
const Schema = mongoose.Schema

const animalSchema = new Schema({
    title: { type: String },
    location: {
        type: Object,
        required: true,
      },
    description : {type:String},
    image: {type:String},

},{
    timestamps: true,
})

module.exports = mongoose.model("Animal", animalSchema)

