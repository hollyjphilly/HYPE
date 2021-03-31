import React from 'react';
import { withRouter } from 'react-router-dom';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      password2: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.signedIn === true) {
  //     this.props.history.push('/login');
  //   }
  // }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.register(this.state); 
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.props.errors[error]}
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

          <div className="register-form">

            <br/>
            <input type="text"
                value={this.state.firstName}
                onChange={this.update('firstName')}
                placeholder="FirstName"
              />

            <br/>
            <input type="text"
                value={this.state.lastName}
                onChange={this.update('lastName')}
                placeholder="LastName"
              />

            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />

            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />

            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />

            <br/>
              <input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />

            <br/>
            <input type="submit" value="Submit" />

            {this.renderErrors()}

          </div>
        </form>
      </div></div></div>
    );
  }
}

export default withRouter(RegisterForm);