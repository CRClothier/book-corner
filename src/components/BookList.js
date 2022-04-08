import { useSelector } from 'react-redux';
import Book from './Book';

function Booklist() {
  const bookArray = useSelector((state) => state.books);
  const list = Object.keys(bookArray).map((book) => (
    <Book
      key={book}
      id={book}
      name={bookArray[book][0].title}
      author={bookArray[book][0].author}
      category={bookArray[book][0].category}
    />
  ));
  return (
    <div>
      {list}
    </div>
  );
}

export default Booklist;
