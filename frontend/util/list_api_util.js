

export const fetchUserLists = () => {
    return $.ajax({
        url: '/api/users/lists',
        method: 'GET'
    })
}

export const fetchUserList = list => {
    return $.ajax({
        url: `/api/users/lists/${list}`,
        method: 'GET'
    })
}

export const createUserList = list => {
    return $.ajax({
        url: '/api/users/lists',
        method: 'POST',
        data: { list: list }
    })
}

export const updateUserList = list => {
    return $.ajax({
        url: `/api/users/lists/${list.id}`,
        method: 'PATCH',
        data: { list: list }
    })
}

export const deleteUserList = listId => {
    return $.ajax({
        url: `/api/users/lists/${listId}`,
        method: 'DELETE'
    })
}