const Comment = ({comment, toggleReplyBoxOpen}) => {
    const styles = {
        marginLeft: `${comment.nestLevel}rem`
    }
    return(
        <div style={styles}>
            <p className="comment">{comment.comment}</p>
            <section className="actions">
                <span className="reply" onClick={()=>toggleReplyBoxOpen(comment)}>Reply</span>
            </section>
        </div>
    )
};

export default Comment;