import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import usersReducer from '../reducers/users_reducer';

const RootReducer = combineReducers({
    session: sessionReducer,
    users: usersReducer
})

export default RootReducer;