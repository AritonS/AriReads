import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import usersReducer from '../reducers/users_reducer';
import listsReducer from './lists_reducer';

const RootReducer = combineReducers({
    session: sessionReducer,
    users: usersReducer,
    lists: listsReducer
})

export default RootReducer;