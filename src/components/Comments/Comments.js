import React, { useLayoutEffect, useRef, useState } from "react";
import onPostComment from "../apis/post-comment.api";
import getCommentsByID from "../apis/comment.api";
import './comments.css';
import Comment from "../Comment/Comment";
import onPostCommentReply from "../apis/reply-comment.api";

const Comments = ({ postId, showTextArea, toggleCommentBox }) => {
    const [commentsList, setCommentsList] = useState([]);
    const [toggleReplyBox, setToggleReplyBox] = useState(false);
    const textArea = useRef();
    const textAreaReply = useRef();

    useLayoutEffect(() => {
        getComments();
    }, [postId]);

    const getComments = async () => {
        const response = await getCommentsByID(postId);
        setCommentsList(response);
    }

    const postComment = async () => {
        try {
            if (textArea.current.value == "")
                return alert("Enter something in your comment");
            const body = {
                comment: textArea.current.value,
                postId,
                postedBy: "Guest",
                children: [],
                isRemoved: false,
                parentId: null
            }
            await onPostComment(body);
            textArea.current.value = "";
            toggleCommentBox();
        } catch (error) {
        } finally {
            getComments();
        }
    }

    const postCommentReply = async () => {
        try {
            if (textArea.current.value == "")
                return alert("Enter something in your comment");
            const body = {
                comment: textArea.current.value,
                postId,
                postedBy: "Guest",
                children: [],
                isRemoved: false,
                psrentId: toggleReplyBox._id
            }
            await onPostCommentReply(body);
            textArea.current.value = "";
            toggleCommentBox();
        } catch (error) {
        } finally {
            getComments();
        }
    }

    const openReplyBox = (comment) => {
        if (toggleReplyBox) setToggleReplyBox(null);
        else setToggleReplyBox(comment)
    }


    return (
        <div>
            {
                showTextArea ? (
                    <section className="comment-post">
                        <textarea placeholder="Write your comment" ref={textArea}></textarea>
                        <button onClick={postComment}>POST</button>
                    </section>
                ) : (
                    commentsList && commentsList.length > 0 ? (
                        React.Children.toArray(
                            commentsList.map(singleComment => {
                                return (
                                    <Comment comment={singleComment} toggleReplyBoxOpen={openReplyBox} />
                                )
                            })
                        )
                    ) : (
                        <p>Post does not have any comments yet</p>
                    )
                )
            }

            {toggleReplyBox && (
                <section className="comment-post">
                    <textarea placeholder="Write your reply" ref={textAreaReply}></textarea>
                    <button onClick={postCommentReply}>REPLY</button>
                </section>
            )}
        </div>
    )
};
export default Comments