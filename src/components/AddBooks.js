import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookThunk } from '../redux/books/books';

function AddBooks() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const addBookDispatch = (e) => {
    e.preventDefault();
    if (title && author && category) {
      dispatch(addBookThunk({
        title,
        author,
        category,
        item_id: uuidv4(),
      }));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <form>
      <input type="text" placeholder="Title" value={title || ''} onChange={(e) => { setTitle(e.target.value); }} />
      <input type="text" placeholder="Author" value={author || ''} onChange={(e) => { setAuthor(e.target.value); }} />
      <input type="text" placeholder="Genre" value={category || ''} onChange={(e) => { setCategory(e.target.value); }} />
      <button onClick={addBookDispatch} type="submit">Add book</button>
    </form>
  );
}

export default AddBooks;
