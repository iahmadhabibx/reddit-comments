const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost/Reddit").then(res => console.log('Connected to DB')).catch(err => console.log('Error in DB'))

const { Comment } = require("./model");

app.post("/comment", async (req, res, next) => {
    try {
        const comment = req.body;

        const doc = new Comment(comment);
        const savedComment = await doc.save();
        res.status(200).send(savedComment)
    } catch (error) {
        next(error);
    }
});

app.get("/", async (req, res, next) => {
    try {
        const comments = await Comment.find({});
        res.status(200).send(comments);
    } catch (error) {
        next(error)
    }
});

app.listen(8000, () => {
    console.log('Listening to port 8000');
})