import * as APIUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_LOGIN = "RECEIVE_USER_LOGIN";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const logoutUser = () => {
  return {
    type: RECEIVE_USER_LOGOUT,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS,
  };
};

// This will be used to redirect the user to the login page upon signup
// export const receiveUserSignIn = () => ({
//     type: RECEIVE_USER_LOGIN
// });

// export const register = (user) => (dispatch) =>
//   APIUtil.register(user).then(
//     (user) => dispatch(receiveCurrentUser(user)),
//     (err) => dispatch(receiveErrors(err.response.data))
//   );
export const register = (user) => (dispatch) => {
  return APIUtil.register(user).then(
    (res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    },
    (err) => dispatch(receiveErrors(err.response.data))
  );
};

export const login = (user) => (dispatch) => {
  return APIUtil.login(user).then(
    (res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    },
    (err) => dispatch(receiveErrors(err.response.data))
  );
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false);
  dispatch(logoutUser());
};
