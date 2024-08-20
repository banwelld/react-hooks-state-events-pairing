import React from 'react';

function Comment({ userName, text }) {
    return (
        <div>
            <h3>{userName}</h3>
            <p>{text}</p>
        </div>
    );
}

export default Comment;