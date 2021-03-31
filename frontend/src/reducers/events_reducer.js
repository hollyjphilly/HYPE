import { 
  RECEIVE_ALL_EVENTS, 
  // RECEIVE_USER_EVENTS, 
  RECEIVE_ONE_EVENT 
} from '../actions/event_actions';
  
  const EventsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {

    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
    
      case RECEIVE_ALL_EVENTS:
        debugger
        newState.all = action.events.data;
        return newState;

      // case RECEIVE_USER_EVENTS:
      //   newState.user = action.events.data;
      //   return newState;

      case RECEIVE_ONE_EVENT:
        newState.new = action.event.data
        return newState;

      default:
        return state;
    }

  };
  
  export default EventsReducer;