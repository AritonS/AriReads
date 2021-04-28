import { $CombinedState } from "redux"

export const fetchAuthors = () => {
    return $.ajax({
        url: '/api/users',
        method: 'GET'
    })
}

export const fetchAuthor = name => {
    return $.ajax({
        url: `/api/authors/${name}`,
        method: 'GET'
    })
}

export const createAuthor = author => {
    return $.ajax({
        url: '/api/authors',
        method: 'POST',
        data: { author: author }
    })
}


export const updateAuthor = author => {
    return $.ajax({
        url: `/api/authors/${author.id}`,
        method: 'PATCH',
        data: { author: author }
    })
}

export const deleteAuthor = authorId => {
    return $.ajax({
        url: `/api/authors/${authorId}`,
        method: 'DELETE'
    })
}