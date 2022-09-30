const { Comment } = require("./model");

const commentSave = async (comment) => {
    return new Promise(async (resolve, reject) => {
        try {
            const doc = new Comment(comment);
            const savedComment = await doc.save();
            resolve(savedComment);
        } catch (error) {
            reject(error);
        }
    });
}
const updateComment = async (parentId, childComment) => {
    return new Promise(async (resolve, reject) => {
        try {
            const doc = await Comment.findByIdAndUpdate(parentId,
                { $push: { children: childComment._id } }, { new: true }
            );
            resolve(doc);
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = { commentSave, updateComment }