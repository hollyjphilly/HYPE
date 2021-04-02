import { connect } from 'react-redux';
import { register, clearErrors, login } from '../../actions/session_actions';
import RegisterForm from './register_form';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: user => dispatch(register(user)),
    clearErrors: () => dispatch(clearErrors()),
    demo: (user) => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);