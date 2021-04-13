import React from 'react';
import Footer from './footer'

class Main extends React.Component {

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

          <div className="purple-bar"></div>

          <div className="wrapper">
            <div className="purple-bar-text slide">
              <h1>Have fun. Stay fit.</h1>
            </div>
          </div>

          <div className="splash-body-container">
          <div className="splash-body-content">
            
          <div className="section" id="one">
            <img src="https://i.ibb.co/N3c3qSf/Screen-Shot-2021-03-31-at-3-24-20-AM.png" alt="Play dodgeball, capture the flag, or freeze tag"/>
            <div className="section-description">
              <h1>Recess lives on.</h1>
              School yard games don’t have to end just because you’re an adult.
              Find friends who are ready to play! <span 
              id="browse" 
              onClick={() => this.props.history.push('/events')}>Click here to browse games.
              </span>
            </div>
          </div>
          <div className="section" id="scroller">
              <img src="https://i.ibb.co/SrDc9mj/Screen-Shot-2021-03-31-at-5.png" alt="GET HYPED -"/>
              <img src="https://i.ibb.co/SrDc9mj/Screen-Shot-2021-03-31-at-5.png" alt="GET HYPED -"/>
              <img src="https://i.ibb.co/SrDc9mj/Screen-Shot-2021-03-31-at-5.png" alt="GET HYPED -"/>
              <img src="https://i.ibb.co/SrDc9mj/Screen-Shot-2021-03-31-at-5.png" alt="GET HYPED -"/>
              <img src="https://i.ibb.co/SrDc9mj/Screen-Shot-2021-03-31-at-5.png" alt="GET HYPED -"/>
              <img src="https://i.ibb.co/SrDc9mj/Screen-Shot-2021-03-31-at-5.png" alt="GET HYPED -"/>
              <img src="https://i.ibb.co/SrDc9mj/Screen-Shot-2021-03-31-at-5.png" alt="GET HYPED -"/>
              <img src="https://i.ibb.co/SrDc9mj/Screen-Shot-2021-03-31-at-5.png" alt="GET HYPED -"/>
              <img src="https://i.ibb.co/SrDc9mj/Screen-Shot-2021-03-31-at-5.png" alt="GET HYPED -"/>
          </div>

          <div className="section" id="two">
            <img src="https://i.ibb.co/bRPXJ64/Screen-Shot-2021-03-31-at-4-13-08-AM.png" alt="Play classics like basketball, soccer, football"/>
            <div className="section-description">
              <h1>Play the classics.</h1>
              Find games of sports you already know and love. 
            </div>
          </div>

          <div className="section" id="three">
            
              <h1>Or try something new! </h1>
              <a href="/#/events" className="splash-button">Find a game to get hyped about.</a> 
            
          </div>

        </div>
        </div>
          <Footer />
      </div>
    );
  }
}

export default Main;