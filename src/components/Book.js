import PropTypes from 'prop-types';

function Book(props) {
  const { name, author } = props;
  return (
    <div className="Book">
      <p>{name}</p>
      <p>{author}</p>
      <button type="button">Delete</button>
    </div>
  );
}

Book.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  name: 'john',
  author: 'Mary',
};

export default Book;
