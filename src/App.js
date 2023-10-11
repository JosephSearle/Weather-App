import './App.css';
import SearchBar from './components/SearchBar';


function App() {

  return (
    <div data-testid="app" className="App">
      <header className="App-header">
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
