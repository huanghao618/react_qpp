import logo from "./logo.svg";
import "./App.css";
import { Aaa } from "./add";

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
          <div className="div">冲突来吧</div>
          <img src={logo} className="App-logo" alt="logo123" />
          Learn React Learn React Learn React Learn React Learn React
          Learn"dev"" React Learn React Learn React
        </a>
        <Aaa></Aaa>
      </header>
      <Name></Name>
    </div>
  );
}

export default App;
