// Actions
const UPDATE_BOOKS = 'UPDATE_BOOKS';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
// const API = '1zVIwx934H10PajbnnI8';

const defaultState = {
  item1: [
    {
      category: 'Fiction',
      title: 'The GMorbidreat Gatsby',
      author: 'Luxby Chincha',
    },
  ],
  item2: [
    {
      category: 'Truth',
      author: 'John Jhon Jon Jones',
      title: 'Pies',
    },
  ],
};

// Reducer
export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case (ADD_BOOK):
      return [...state, action.new];

    case (REMOVE_BOOK):
      return state.filter((book) => book.id !== action.id);

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
