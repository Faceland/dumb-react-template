import logo from './logo.svg';
import './App.css';
import BasicComponent from "./components/BasicComponent/BasicComponent";
import HeaderBar from "./components/HeaderBar/HeaderBar";

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <BasicComponent>
          hendlo
        </BasicComponent>
      </header>
    </div>
  );
}

export default App;
