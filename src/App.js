import "./App.css";
import Settings from "./components/Settings";
import Display from "./components/Display";
import Controller from "./components/Controller";

function App() {
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <Settings />
      <Display />
      <Controller />
    </div>
  );
}

export default App;
