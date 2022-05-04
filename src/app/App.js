import './App.css';
import '../features/topics/Topics.css';
import Topics from '../features/topics/Topics'
import NewTopicForm from '../components/NewTopicForm'


function App() {
  return (
    <div className="App">
      <div className='header-container'>
        <header className="App-header">
          <h2>Task Tracker</h2>
        </header>
        <NewTopicForm />
      </div>
      <div className="body-container">
        <Topics />
      </div>
    </div>
  );
}

export default App;
