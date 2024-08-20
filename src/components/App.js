import React from 'react';
import video from "../data/video.js";
import VideoPane from "./VideoPane";
import DetailsPane from "./DetailsPane";

function App() {
  const { title, embedUrl } = video;

  return (
    <div className="App">
      <VideoPane title={title} link={embedUrl} />
      <DetailsPane video={video} />
    </div>
  );
}

export default App;
