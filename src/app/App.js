import './App.css';
import Topics from '../features/topics/Topics'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Task Tracker</h2>
      </header>
      <div className="main-container">
        <Topics />
      </div>
    </div>
  );
}

export default App;
