const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animalSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: Object,
      required: true,
    },
    kind: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: { type: String },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Animal", animalSchema);
