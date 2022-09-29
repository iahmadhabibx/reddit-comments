import React, { useLayoutEffect, useRef, useState } from "react";
import onPostComment from "../apis/post-comment.api";
import getCommentsByID from "../apis/comment.api";
import './comments.css';

const Comments = ({ postId, showTextArea }) => {
    const [commentsList, setCommentsList] = useState([]);
    const textArea = useRef();

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
                hasChildren: false,
                children: [],
                isRemoved: false
            }
            await onPostComment(body);
            textArea.current.value = "";
        } catch (error) {
        } finally {
            getComments();
        }
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
                            commentsList.map(comment => {
                                return(
                                    <p className="comment">{comment}</p>
                                )
                            })
                        )
                    ): (
                        <p>Post does not have any comments yet</p>
                    )
                )
            }
        </div>
    )
};
export default Comments