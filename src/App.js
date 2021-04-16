import logo from "./logo.svg";
import "./App.css";
import { Name } from "./add";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Learn React Learn
          React Learn React
        </p>
        <div className="div">测试</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="lo11231go" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          Learn React Learn React Learn React Learn React Learn React
          Learn"dev"" React Learn React Learn React
        </a>
      </header>
      <Name></Name>
    </div>
  );
}

export default App;
