import { Link, Routes, Route } from 'react-router-dom';
import Catalogue from './components/Catagories';
import BooksPage from './components/BooksPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Book Corner</h1>
        <nav>
          <Link className="link" to="/">Books</Link>
          <Link className="link" to="/catalogue">Catalogue</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<BooksPage />} />
          <Route exact path="/catalogue" element={<Catalogue />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
