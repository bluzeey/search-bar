import './App.css';
import SearchBar from './components/SearchBar';
import SearchButton from './components/Button';
function App() {
  return (
    <div className="App">
      <SearchBar/>
      <SearchButton text="Search"/>
    </div>
  );
}

export default App;
