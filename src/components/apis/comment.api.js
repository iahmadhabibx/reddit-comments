const getCommentsByID = async (id) => {
    try {
        const results = await fetch(`http://localhost:8000/comments`, {
            method: 'GET',
            headers: { 'Content-Type': 'text/plain' },
            referrerPolicy: 'no-referrer',
        });
        return results.json();
    } catch (error) {
        console.log('error', error);
    }
}

module.exports = getCommentsByID;