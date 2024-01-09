import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './Component/Task';
import Task from './Component/Task';
import ShowTask from './Component/ShowTask';
function App() {
  return (
    <div className="App">
     <Task></Task>
     <ShowTask></ShowTask>
    </div>
  );
}

export default App;
