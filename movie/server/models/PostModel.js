const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    name: String, // merger of firstName and lastnName for post by-function
    creator: String,
    tags: [String],
    selectedFile: String, // img of movie
    starring: [String],
    time: String,
    genre: [String],
    director: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

module.exports = mongoose.model("PostModel", postSchema);
