import React, { useState } from 'react';
import CommentsPane from './CommentsPane';

function DetailsPane({ video }) {
    const { title, views, createdAt, upvotes, downvotes, comments } = video;
    const [upvotesCount, setUpvote] = useState(upvotes);
    const [downvotesCount, setDownvote] = useState(downvotes);
    const [viewComments, setViewComments] = useState(true);

    const upvoteClick = () => setUpvote(upvotesCount + 1);
    const downvoteClick = () => setDownvote(downvotesCount + 1);
    const toggleComments = () => setViewComments(view => !view);

    function ActionButton({ action, buttonText }) {
        return (
            <button
                onClick={action}
                style={{ paddingLeft: "10px", paddingRight: "10px", minWidth: "120px", height: "30px" }}
            >
                {buttonText}
            </button>
        )
    }

    const commentsDisplay = () => viewComments && <CommentsPane comments={comments} />;

    return (
        <div className="details-panel">
            <div className="details">
                <h1>{title}</h1>
                <p>{views} views | Updated {createdAt}</p>
            </div>
            <div className="votes" style={{ marginTop: "10px", marginBottom: "10px" }}>
                <ActionButton action={upvoteClick} buttonText={upvotesCount + " 👍"} />
                <ActionButton action={downvoteClick} buttonText={downvotesCount + " 👎"} />
            </div>
            <div className="hideComments" style={{ marginTop: "10px", marginBottom: "10px" }}>
                <ActionButton action={toggleComments} buttonText={viewComments ? "Hide Comments" : "View Comments"} />
            </div>
            {commentsDisplay()}
        </div>
    );
}

export default DetailsPane;