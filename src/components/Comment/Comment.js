const Comment = ({comment, toggleReplyBoxOpen}) => {
    return(
        <div>
            <p className="comment">{comment.comment}</p>
            <section className="actions">
                <span className="reply" onClick={()=>toggleReplyBoxOpen(comment)}>Reply</span>
            </section>
        </div>
    )
};

export default Comment;