const mongoose = require("mongoose");
const PostModel = require("../models/PostModel");

module.exports.getPosts = async (req, res) => {
    try {
        const postMessages = await PostModel.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports.getPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await PostModel.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports.createPost = async (req, res) => {
    const post = req.body;
    const newPostMessage = new PostModel({
        ...post,
        createdAt: new Date().toISOString(),
    });
    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

module.exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const {
        starring,
        director,
        time,
        genre,
        title,
        message,
        creator,
        selectedFile,
        tags,
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = {
        starring,
        director,
        time,
        genre,
        creator,
        title,
        message,
        tags,
        selectedFile,
        _id: id,
    };

    await PostModel.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);
};

module.exports.deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No post with id: ${id}`);
    await PostModel.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
};

module.exports.likePost = async (req, res) => {
    const { id } = req.params;
    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No post with id: ${id}`);
    const post = await PostModel.findById(id);
    const index = post.likes.findIndex((id) => id === String(req.userId));
    if (index === -1) {
        post.likes.push(req.userId);
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }
    const updatedPost = await PostModel.findByIdAndUpdate(id, post, {
        new: true,
    });
    res.status(200).json(updatedPost);
};
