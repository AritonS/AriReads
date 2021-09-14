import * as UserListApiUtil from '../util/list_api_util';

export const RECEIVE_ALL_USER_LISTS = 'RECEIVE_ALL_USER_LISTS';
export const RECEIVE_CURRENT_USER_LIST = 'RECEIVE_USER_LIST';
export const REMOVE_CURRENT_USER_LIST = 'REMOVE_USER_LIST';

const receiveUserLists = lists => {
    return {
        type: RECEIVE_ALL_USER_LISTS,
        lists
    }
}

const receiveUserList = list => {
    return {
        type: RECEIVE_CURRENT_USER_LIST,
        list
    }
}

const removeUserList = listId => {
    return {
        type: REMOVE_CURRENT_USER_LIST,
        listId
    }
}

export const fetchUserLists = () => dispatch => {
    return UserListApiUtil.fetchUserLists()
        .then(lists => dispatch(receiveUserLists(lists)))
}

export const fetchUserList = listId => dispatch => {
    return UserListApiUtil.fetchUserList()
        .then(list => dispatch(receiveUserList(list)))
}

export const createUserList = list => dispatch => {
    return UserListApiUtil.createUserList()
        .then(createdList => dispatch(receiveUserList(createdList)))
}

export const updateUserList = list => dispatch => {
    return UserListApiUtil.updateUserList(list)
        .then(updatedList => dispatch(receiveUserList(updatedList)))
}

export const deleteUserList = listId => dispatch => {
    return UserListApiUtil.deleteUserList(listId)
        .then(() => dispatch(removeUserList(listId)))
}