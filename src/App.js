import Planets from './Planets';
import galaxy from './galaxy.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        <HelloWorld /> */}
        <img src={galaxy} alt="galaxy" />
        <Planets />
      </header>
    </div>
  );
}

export default App;
