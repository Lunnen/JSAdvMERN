const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  starring: String,
  time: String,
  genre: String,
  director: String,
  likes: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("PostMessage", postSchema);
