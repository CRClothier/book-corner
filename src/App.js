import { Link, Routes, Route } from 'react-router-dom';
import Catalogue from './components/Catagories';
import BooksPage from './components/BooksPage';
import login from './login.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title-nav">
          <h1 className="title">The Book Corner</h1>
          <nav>
            <Link className="link" to="/">Books</Link>
            <Link className="link" to="/catalogue">Catalogue</Link>
          </nav>
        </div>
        <img className="login" src={login} width="45px" alt="user" />
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
