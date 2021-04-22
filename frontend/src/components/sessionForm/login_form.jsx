import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demo = this.demo.bind(this);
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state); 
  }

  demo() {
    this.props.login({email: "demo@hype.com", password: "password"});
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.values(this.props.errors).map((error) => (
          <li className="errors" key={error.id}><svg className="errors-icon" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
          </path></svg>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div className="content-outer">
        <div className="content-inner">
        <div className="content-padding">

          <form onSubmit={this.handleSubmit}>
            <div className="session-container">

              <h1>Log in</h1>
              <h2>to join or host a game </h2>
              <br/>
              <br/>

                <div className="session-input">
                  <input
                      autoFocus
                      className="session-text"
                      type="text"
                      value={this.state.email}
                      placeholder=" "
                      onChange={this.update('email')}/>
                  <label
                      className="session-label">Email</label>
                </div>

                <div className="session-input">
                  <input
                      className="session-text"
                      type="password"
                      value={this.state.password}
                      placeholder=" "
                      onChange={this.update('password')}/>
                  <label
                      className="session-label">Password</label>
                </div>

              <div className="errors-container">{this.renderErrors()}</div>

              <div className="alt-session-links">
                <br />
                <button className="session-button">Log In</button>
                <p>Don't have an account? <span onClick={
                  () => this.props.history.push("/register")
                  }>Register</span></p>
              </div>

            </div>
          </form>
          
        </div>
        <div id="demo-button">
            <button onClick={this.demo}>Or use a<br></br>demo account.</button>
          </div>
        </div></div>
      </div>
    );
  }
}

export default withRouter(LoginForm);