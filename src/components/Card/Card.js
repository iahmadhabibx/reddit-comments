import { useState } from 'react';
import Comments from '../Comments/Comments';
import './card.css';

const Card = ({ post }) => {
    const [showTextArea, setShowTextArea] = useState(false);

    return (
        <div className="card">
            <header>
                <img className="card-img" src={post.user.img} />
                <div className="card-title">{post.title}</div>
            </header>
            <aside>
                <img src={post.media} alt={post.title} />
            </aside>
            <section className='comments'>
                <button onClick={()=>setShowTextArea(!showTextArea)}>Show Comments</button>
                <Comments postId={post.id} showTextArea={showTextArea} toggleCommentBox={()=>setShowTextArea(!setShowTextArea)} />
            </section>
        </div>
    );
};

export default Card;