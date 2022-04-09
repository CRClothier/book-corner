import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
    <div className="book">
      <div className="left">
        <div>
          <p className="category">{category}</p>
          <p className="name">{name}</p>
          <p className="author">{author}</p>
        </div>
        <button className="comments" type="button">Comments</button>
        <button className="remove" type="button" onClick={dispatchRemoveBook}>Remove</button>
        <button className="edit" type="button">Edit</button>
      </div>
      <div className="middle">
        <CircularProgressbar value="70" className="progress-ring" />
        <div>
          <p className="percent">70%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="right">
        <p className="current-chapter">Current Chapter</p>
        <p className="chapter">Chapter 12</p>
        <button type="button" className="update">UPDATE PROGRESS</button>
      </div>
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
