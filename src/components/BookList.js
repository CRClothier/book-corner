import { useSelector } from 'react-redux';
import Book from './Book';

function Booklist() {
  const bookArray = useSelector((state) => state.books);
  const list = bookArray.map((book) => (
    <Book
      key={book.id}
      id={book.id}
      name={book.name}
      author={book.author}
    />
  ));
  return (
    <div>
      {list}
    </div>
  );
}

export default Booklist;
