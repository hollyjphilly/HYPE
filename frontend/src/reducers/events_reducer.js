import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_ONE_EVENT,
  REMOVE_EVENT,
} from "../actions/event_actions";

const EventsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      return action.events.data;
    case RECEIVE_ONE_EVENT:
      return [action.event.data];
    case REMOVE_EVENT:
      return [];
    default:
      return state;
  }
};

export default EventsReducer;
