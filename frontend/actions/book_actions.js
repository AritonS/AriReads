import * as BookApiUtil from '../util/book_api_util';
import { RECEIVE_ALL_AUTHORS } from './author_actions';

export const RECEIVE_ALL_BOOKS = "RECEIVE_ALL_BOOKS";
export const RECEIVE_BOOK = "RECEIVE_BOOK";

const receiveBooks = books => {
    return {
        type: RECEIVE_ALL_BOOKS,
        books
    }
}

const receiveBook = book => {
    return {
        type: RECEIVE_BOOK,
        book
    }
}