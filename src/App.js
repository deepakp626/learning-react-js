import logo from './logo.svg';
import './App.css';
import Home from './home.js'
import Profile from './Profile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <h1>props in react</h1> */}
        <Profile text={{name:"peter"}} data="profilr data"/>
        <Profile text={{name:"name 1"}} data="profilr 1 data"/>
        <Profile text={{name:"name 2"}} data="profilr 2 data"/>
      </header>
    </div>
  );
}

export default App;
