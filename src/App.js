import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Nav"
import Search from "./components/Search";
import Hotel from "./components/Hotel";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Search />
      <Hotel />
    </div>
  );
}

export default App;
