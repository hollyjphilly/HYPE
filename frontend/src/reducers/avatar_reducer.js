import { RECEIVE_CURRENT_AVATAR } from '../actions/avatar_actions';

const avatarReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_CURRENT_AVATAR:
      return action.currentUser;

    default:
      return state;
  }
};

export default avatarReducer;