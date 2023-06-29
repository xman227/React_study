import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className ="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          내 첫번째 리액트를 가동한 건에 대하여 ! 
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
