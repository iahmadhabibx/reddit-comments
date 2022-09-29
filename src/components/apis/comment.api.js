const getCommentsByID = (id) => {
try {
    const results = await fetch(`http://localhost:8000/comments/${id}`);
    const comments = await results.json();
} catch (error) {
    console.log(error);
}
}