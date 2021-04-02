import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: true,
            title: "",
            description: "",
            sport: "",
            host: this.props.user.id,
            maxCapacity: 4,
            location: "444.44, 444.444",
            dateTime: "",
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
                    </div>
                    <div className="modal-body">
                        <h2>I am a modal.</h2>
                        <h2>Here me roar.</h2>
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