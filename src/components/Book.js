import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const { name, author, id } = props;
  const dispatch = useDispatch();
  const dispatchRemoveBook = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <div className="Book">
      <p>{name}</p>
      <p>{author}</p>
      <button type="button" onClick={dispatchRemoveBook}>Delete</button>
    </div>
  );
}

Book.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};

Book.defaultProps = {
  name: 'john',
  author: 'Mary',
  id: '0',
};

export default Book;
