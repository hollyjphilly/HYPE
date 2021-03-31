import React from 'react';

class SplashVideo extends React.Component {

  render() {
    return (
      <div>
        <div className="splash-vid-container">
          <video
            autoPlay
            loop={true}
            src="https://drive.google.com/uc?export=download&id=1yTv0ET1Gd5ljA31T95CD895lc9mzz4ld"
            muted={true}
            id="myVideo"></video>
        </div>
      </div>
    );
  }
}

export default SplashVideo;