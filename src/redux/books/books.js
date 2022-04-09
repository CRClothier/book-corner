import axios from 'axios';

// Actions
const UPDATE_BOOKS = 'UPDATE_BOOKS';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/1zVIwx934H10PajbnnI8/books';

const defaultState = [
  {
    item_id: 'mimsy',
    category: 'Loading...',
    title: '',
    author: '',
  },
];

// Reducer
export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case (ADD_BOOK):
      return [...state, action.new];

    case (REMOVE_BOOK):
      return state.filter((book) => book.id !== action.id);
    case (UPDATE_BOOKS):
      return action.books;
    default:
      return state;
  }
}

// Action Creators
export function updateBooks(bookArray) {
  return {
    type: UPDATE_BOOKS,
    books: bookArray,
  };
}

export function addBook(book) {
  return {
    type: ADD_BOOK,
    new: book,
  };
}

export function removeBook(ID) {
  return {
    type: REMOVE_BOOK,
    id: ID,
  };
}

// Thunks

export const updateBooksThunk = () => (dispatch) => axios.get(API)
  .then((res) => res.data)
  .then((data) => {
    const books = Object.keys(data).map((id) => ({
      item_id: id,
      ...data[id][0],
    }));
    dispatch(updateBooks(books));
  });

export const addBookThunk = (book) => async (dispatch) => {
  await axios.post(API, book);
  dispatch(addBook(book));
};

export const removeBookThunk = () => (dispatch) => axios.get(API)
  .then((res) => res.data)
  .then((books) => {
    dispatch(updateBooks(books));
  });
