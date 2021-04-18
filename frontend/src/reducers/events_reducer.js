import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_ONE_EVENT,
} from "../actions/event_actions";

const EventsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = [...state];
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      return action.events.data;
    case RECEIVE_ONE_EVENT:
      newState.push(action.event.data);
      return newState;
    default:
      return state;
  }
};

export default EventsReducer;
