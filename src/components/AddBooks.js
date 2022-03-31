import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function AddBooks() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const addBookDispatch = (e) => {
    e.preventDefault();
    if (name && author) {
      dispatch(addBook({ name, author, id: uuidv4() }));
      setName('');
      setAuthor('');
    }
  };

  return (
    <form>
      <input type="text" placeholder="Name" value={name || ''} onChange={(e) => { setName(e.target.value); }} />
      <input type="text" placeholder="Author" value={author || ''} onChange={(e) => { setAuthor(e.target.value); }} />
      <button onClick={addBookDispatch} type="submit">Add book</button>
    </form>
  );
}

export default AddBooks;
