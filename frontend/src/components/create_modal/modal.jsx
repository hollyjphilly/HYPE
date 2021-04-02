import React from 'react';
import CreateEventContainer from '../create_event/create_event';

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: true,
        };
        this.toggle = this.toggle.bind(this);
        this.display = this.display.bind(this);
    }

    toggle() {
        if (!this.props.loggedIn) {
            this.props.history.push('/login')
        } else { this.setState({
            hidden: !this.state.hidden
        }) }
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.createEvent(this.state);
        this.setState({ hidden: true });
    }

    display() {
        return <>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="modal">
                <div className="modal-content">
                    <div className="title-row">
                        <span className="x-close" onClick={this.toggle} >&times;</span>
                        <h1 className="create-event-form-header-h1">Schedule a Game</h1>
                    </div>
                    <div className="modal-body">
                        <CreateEventContainer />
                    </div>
                </div>
            </div>
            </form>
        </>
    }

    render() {
        return <>
                <button className="host-button" onClick={this.toggle}>Host a Game</button>
            {/* {this.display()} */}
            {this.state.hidden ? "" : this.display()}
        </>
    }
}

export default Modal;