import {
  RECEIVE_HOSTED_EVENTS,
  RECEIVE_ATTENDING_EVENTS
} from '../actions/user_events_actions'

const userEventsReducer = (state={ hostedEvents: {}, attendingEvents: {} }, action) => {
  Object.freeze(action)
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_HOSTED_EVENTS:
      newState.hostedEvents = action.hostedEvents;
      return newState;
    case RECEIVE_ATTENDING_EVENTS:
      newState.attendingEvents = action.attendingEvents;
      return newState;
    default:
      return state;
  }
};

export default userEventsReducer;