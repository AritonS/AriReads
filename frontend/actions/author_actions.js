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