import * as AuthorApiUtil from '../util/author_api_util';

export const RECEIVE_ALL_AUTHORS = "RECEIVE_ALL_AUTHORS";
export const RECEIVE_CURRENT_AUTHOR = "RECEIVE_CURRENT_AUTHOR";
export const REMOVE_CURRENT_AUTHOR = "REMOVE_CURRENT_AUTHOR";



const receiveAuthors = authors => {
    return {
        type: RECEIVE_ALL_AUTHORS,
        authors
    }
}

const receiveAuthor = author => {
    return {
        type: RECEIVE_CURRENT_AUTHOR,
        author
    }
}

const removeAuthor = authorId => {
    return {
        type: REMOVE_CURRENT_AUTHOR,
        authorId
    }
}

export const fetchAuthors = () => dispatch => {
    return AuthorApiUtil.fetchAuthors()
        .then(authors => dispatch(receiveAuthors(authors)))
}

export const fetchAuthor = authorId => dispatch => {
    return AuthorApiUtil.fetchAuthor(authorId)
        .then(author => dispatch(receiveAuthor(author)))
}

export const createAuthor = author => dispatch => {
    return AuthorApiUtil.updateAuthor(author)
        .then(createdAuthor => dispatch(receiveAuthor(author)))
}

export const updateAuthor = author => dispatch => {
    return AuthorApiUtil.updateAuthor(author)
        .then(updatedAuthor => dispatch(receiveAuthor(author)))
}

export const deleteAuthor = authorId => dispatch => {
    return AuthorApiUtil.deleteAuthor(authorId)
        .then(() => dispatch(removeAuthor(authorId)))
}