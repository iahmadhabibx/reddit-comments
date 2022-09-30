const { Comment } = require("./model");

const commentSave = (comment) => {
    return new Promise((resolve, reject) => {
        try {
            const doc = new Comment(comment);
            const savedComment = await doc.save();
            resolve(savedComment);
        } catch (error) {
            reject(error);
        }
    });
}
const updateComment = (parentId, childComment) => {
    const doc = await Comment.findByIdAndUpdate(parentId,
        { $push: { children: childComment._id  } }
    )
}

module.exports = { commentSave }