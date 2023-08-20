import logo from './logo.svg';
import './App.css';
import Topbar from './components/topbar'
import MainPage from './pages/mainPage';

function App() {
  return (
    <div className="App">
      <Topbar />
      <MainPage />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Si se pudo banda :D
          Ahora google es nuestro
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
