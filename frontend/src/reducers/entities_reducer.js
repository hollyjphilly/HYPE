import { combineReducers } from 'redux';
import userEventReducer from './user_events_reducer'
import eventsReducer from './events_reducer';
import avatarReducer from './avatar_reducer';

export default combineReducers({
    userEvents: userEventReducer,
    events: eventsReducer,
    avatar: avatarReducer,
})