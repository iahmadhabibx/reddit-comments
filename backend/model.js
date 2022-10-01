const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    comment: String,
    postId: String,
    postedBy: String,
    children: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    isRemoved: Boolean,
    parentId: { type: Schema.Types.ObjectId, ref: "Comment" }
});

const Comment = mongoose.model('Comment', commentsSchema);

module.exports = { Comment }