import { useDispatch } from 'react-redux';
import BookList from './BookList';
import AddBooks from './AddBooks';
import { updateBooksThunk } from '../redux/books/books';

function BooksPage() {
  const dispatch = useDispatch();
  dispatch(updateBooksThunk());
  return (
    <div>
      <BookList />
      <AddBooks />
    </div>
  );
}

export default BooksPage;
