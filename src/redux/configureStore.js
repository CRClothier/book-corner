import { combineReducers, createStore } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = createStore( // eslint-disable-line no-unused-vars
  rootReducer,
  {},
);

export { rootReducer, store };
