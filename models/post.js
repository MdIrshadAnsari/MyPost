const mongoose = require("mongoose");

const postschema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  content: String,
  like: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
  ],
});

module.exports = mongoose.model("post", postschema)
