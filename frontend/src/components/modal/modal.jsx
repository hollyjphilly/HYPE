import React from "react";
import CreateEventContainer from "../create_event/create_event_form_container";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };

    this.toggle = this.toggle.bind(this);
    this.display = this.display.bind(this);
    this.handleHidden = this.handleHidden.bind(this);
  }

  toggle() {
    if (!this.props.loggedIn) {
      this.props.history.push("/login");
    } else {
      this.setState({
        hidden: !this.state.hidden,
      });
    }
  }

  handleHidden = (value) => {
    this.setState({
      hidden: value,
    });
  };

  display() {
    return (
      <>
        <div className="modal">
          <div className="modal-content">
            <div className="title-row">
              <span className="x-close" onClick={this.toggle}>
                &times;
              </span>
              <h1 className="modal-title">Schedule a Game</h1>
            </div>
              <CreateEventContainer hidden={this.handleHidden} />
          </div>
        </div>
      </>
    );
  }

  render() {
    return (
      <>
        <button className="host-button" onClick={this.toggle}>
          Host a Game
        </button>
        {this.state.hidden ? "" : this.display()}
      </>
    );
  }
}

export default Modal;
