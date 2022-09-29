import React from "react";
import Card from "../Card/Card";
import Comments from "../Comments/Comments";
import posts from "./posts-dummy";
import './posts.css';

const Posts = () => {
    return (
        <section className="posts">
            {React.Children.toArray(
                posts.map(post => {
                    return (
                        <Card post={post} />
                    )
                })
            )}
        </section>
    )
};

export default Posts