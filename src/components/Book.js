import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookThunk } from '../redux/books/books';

function Book(props) {
  const {
    name,
    author,
    id,
    category,
  } = props;
  const dispatch = useDispatch();
  const dispatchRemoveBook = (e) => {
    e.preventDefault();
    dispatch(removeBookThunk(id));
  };

  return (
    <div className="Book">
      <p>{name}</p>
      <p>{author}</p>
      <p>{category}</p>
      <button type="button" onClick={dispatchRemoveBook}>Delete</button>
    </div>
  );
}

Book.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  name: 'john',
  author: 'Mary',
  id: '0',
  category: 'readable',
};

export default Book;
