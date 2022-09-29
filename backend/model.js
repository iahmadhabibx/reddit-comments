const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    comment: String,
    postId: String,
    postedBy: String,
    hasChildren: Boolean,
    children: Array,
    isRemoved: Boolean
});

const Comment = mongoose.model('Comment', commentsSchema);

module.exports = { Comment }