import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import EventErrorsReducers from './events_errors_reducer.js';

export default combineReducers({
  session: SessionErrorsReducer,
  events: EventErrorsReducers
});