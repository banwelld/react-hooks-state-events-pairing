import React from 'react';

function VideoPane({title, link}) {
    return (
        <div id="videoContainer" style={{margin: '20px'}}>
            <iframe width="735" height="420" src={link} border="0" allowFullScreen title={title} />
        </div>
    );
}

export default VideoPane;