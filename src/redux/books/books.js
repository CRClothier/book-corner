// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const defaultState = [
  {
    name: 'Harry Potter',
    author: 'J K Rowling',
    id: 1,
  },
  {
    name: 'Alice in Wonderland',
    author: 'Lewis Caroll',
    id: 2,
  },
];

// Reducer
export default function booksReducer(state = defaultState, action) {
  switch (action.type) {
    case (ADD_BOOK):
      return [...state].push(action.new);

    case (REMOVE_BOOK):
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
}

// Action Creators
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
