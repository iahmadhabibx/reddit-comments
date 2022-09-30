const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

mongoose.connect("mongodb://localhost/Reddit").then(res => console.log('Connected to DB')).catch(err => console.log('Error in DB'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));
const { Comment } = require("./model");
const { commentSave } = require("./save-comment.service");

app.post("/comment", async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        const comment = req.body;
        await commentSave(comment);
        res.status(200).send({ message: "Posted" })
    } catch (error) {
        res.status(400).send({ message: "Error while adding" })
    }
});


app.post("/comment/reply", async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        const comment = req.body;
        const results = await commentSave(comment);
        await updateComment(comment.parentId, results);
        res.status(200).send({ message: "Posted" })
    } catch (error) {
        res.status(400).send({ message: "Error while adding" })
    }
});

app.get("/comments", async (req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        const comments = await Comment.find().populate("children");
        res.status(200).send(comments);
    } catch (error) {
        res.status(400).send({ message: "Error while getting" })
    }
});

app.listen(8000, () => {
    console.log('Listening to port 8000');
})