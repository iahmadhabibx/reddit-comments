import './card.css';

const Card = ({ post }) => {
    return (
        <div className="card">
            <header>
                <img className="card-img" src={post.user.img} />
                <div className="card-title">{post.title}</div>
            </header>
            <aside>
                <img src={post.media} alt={post.title} />
            </aside>
        </div>
    );
};

export default Card;