import { RECEIVE_ALL_USER_LISTS, RECEIVE_CURRENT_USER_LIST, REMOVE_CURRENT_USER_LIST } from "../actions/list_actions";

const listsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_USER_LISTS:
            return action.lists;
        case RECEIVE_CURRENT_USER_LIST:
            nextState[action.list.id] = action.list;
            return nextState;
        case REMOVE_CURRENT_USER_LIST:
            delete nextState[action.listId];
            return nextState;
        default:
            return oldState;
    }
}

export default listsReducer