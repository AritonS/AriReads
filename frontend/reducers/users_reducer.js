import { RECEIVE_ALL_USERS, RECEIVE_CURRENT_USER } from '../actions/user_actions';
import {LOGOUT_CURRENT_USER} from '../actions/session'

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return action.users;
        case RECEIVE_CURRENT_USER:
            nextState[action.user.id] = action.user;
            return nextState;  
        case LOGOUT_CURRENT_USER:
            delete nextState[action.userId];
            return nextState;
        default:
            return oldState;
    }
}

export default usersReducer;