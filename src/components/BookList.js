import { useSelector } from 'react-redux';
import Book from './Book';

function Booklist() {
  const bookArray = useSelector((state) => state.books);
  const list = bookArray.map((book) => (
    <Book
      key={book.item_id}
      id={book.item_id}
      name={book.title}
      author={book.author}
      category={book.category}
    />
  ));
  return (
    <div>
      {list}
    </div>
  );
}

export default Booklist;
