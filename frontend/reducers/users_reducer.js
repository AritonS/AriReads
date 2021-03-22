import { RECEIVE_ALL_USERS, RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return action.posts;
        case RECEIVE_USER:
            nextState[action.post.id] = action.post;
            return nextState;  
        case REMOVE_USER:
            delete nextState[action.postId];
            return nextState;
        default:
            return oldState;
    }
}

export default usersReducer;