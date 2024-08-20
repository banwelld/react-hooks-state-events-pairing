import React from 'react';
import Comment from './Comment';

function CommentsPane({ comments }) {

    const commentArr = comments.map(comment => <Comment key={comment.id} userName={comment.user} text={comment.comment} />);

    return (
        <div>
            <h2>Comments ({comments.length})</h2>
            {commentArr}
        </div>
    );
}

export default CommentsPane;