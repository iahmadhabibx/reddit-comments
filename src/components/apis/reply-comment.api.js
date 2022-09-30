const onPostCommentReply = async (data) => {
    try {
        const results = await fetch(`http://localhost:8000/comment/reply`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: { 'Content-Type': 'application/json' },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return results.json();
    } catch (error) {
    }
}

module.exports = onPostCommentReply;