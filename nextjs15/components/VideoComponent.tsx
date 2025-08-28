import React from "react";

const VideoComponent = () => {
  return (
    <>
      <div>
        <iframe
          width={560}
          height={315}
          src="https://www.youtube.com/embed/9Ur0ai3J85M?si=bjkOKnxgI0UfwU34"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoComponent;
