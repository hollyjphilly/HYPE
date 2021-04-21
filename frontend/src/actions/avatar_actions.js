import * as AvatarAPIUtil from "../util/avatar_api_util";
// import {receiveCurrentUser} from "./session_actions"

export const RECEIVE_CURRENT_AVATAR = "RECEIVE_CURRENT_AVATAR";

export const receiveCurrentAvatar = (currentUser) => {
  
  return {
    type: RECEIVE_CURRENT_AVATAR,
    currentUser,
  };
};

export const updateAvatar = (userData) => (dispatch) => {
  return AvatarAPIUtil.updateAvatar(userData).then(
    (res) => dispatch( receiveCurrentAvatar(res.data)),
    (err) => console.log(err)
  );
};

export const fetchAvatar = () => (dispatch) => {
  return AvatarAPIUtil.fetchAvatar().then(
    (res) => dispatch( receiveCurrentAvatar(res.data)),
    (err) => console.log(err)
  );
};