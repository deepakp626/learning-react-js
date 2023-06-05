import logo from './logo.svg';
import './App.css';
import Home from './home.js'
import Profile from './Profile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deepak prajapat
        </a> */}

        <Profile text="function profile component"/>
      </header>
    </div>
  );
}

export default App;
