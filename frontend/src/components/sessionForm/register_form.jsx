import React from "react";
import { withRouter } from "react-router-dom";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      password2: "",
      avatar: {
        topType: "NoHair",
        accessoriesType: "Blank",
        hairColor: "Black",
        facialHairType: "Blank",
        clotheType: "Hoodie",
        eyeType: "Default",            
        mouthType: "Default",
        skinColor: ((Math.random() < 0.5) ? "Light" : "DarkBrown")
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demo = this.demo.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.register(this.state);
  }

  demo() {
    this.props.demo({ email: "demo@hype.com", password: "password" });
  }

  renderErrors() {
    return (
      <ul>
        {Object.values(this.props.errors).map((error) => (
          <li className="errors" key={error.id}>
            <svg className="errors-icon" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
            </svg>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="content-outer">
        <div className="content-inner">
          <div className="content-padding">
            <form onSubmit={this.handleSubmit}>
              <div className="session-container">
                <h1>Create an account</h1>
                <br />

                <div id="name">
                  <div className="session-input">
                    <input
                      autoFocus
                      className="session-text"
                      type="text"
                      value={this.state.firstName}
                      placeholder=" "
                      onChange={this.update("firstName")}
                    />
                    <label className="session-label">First name</label>
                  </div>

                  <div className="session-input">
                    <input
                      className="session-text"
                      type="text"
                      value={this.state.lastName}
                      placeholder=" "
                      onChange={this.update("lastName")}
                    />
                    <label className="session-label">Last name</label>
                  </div>
                </div>

                <div className="session-input">
                  <input
                    className="session-text"
                    type="text"
                    value={this.state.email}
                    placeholder=" "
                    onChange={this.update("email")}
                  />
                  <label className="session-label">Your email address</label>
                </div>

                <div className="session-input">
                  <input
                    className="session-text"
                    type="text"
                    value={this.state.username}
                    placeholder=" "
                    onChange={this.update("username")}
                  />
                  <label className="session-label">Username</label>
                </div>

                <div className="session-input">
                  <input
                    className="session-text"
                    type="password"
                    value={this.state.password}
                    placeholder=" "
                    onChange={this.update("password")}
                  />
                  <label className="session-label">Password</label>
                </div>

                <div className="session-input">
                  <input
                    className="session-text"
                    type="password"
                    value={this.state.password2}
                    placeholder=" "
                    onChange={this.update("password2")}
                  />
                  <label className="session-label">Confirm Password</label>
                </div>

                <div className="errors-container">{this.renderErrors()}</div>
                
                
            <div className="alt-session-links">
              <br />
              <button className="session-button">Register</button>
              <p>Already have an account? <span onClick={
                () => this.props.history.push("/login")
                }>Sign in</span></p>
            </div>
              </div>
            </form>
          </div>
          <div id="demo-button">
            <button onClick={this.demo}>Or use a<br></br>demo account.</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterForm);
