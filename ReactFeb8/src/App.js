import logo from './logo.svg';
import './App.css';
import Todo from "./Todo"
import AddNos from './AddNos';
import Average from './Average';
import Minicalculator from './Minicalculator';
function App() {
  return (
    <div className="App">
      <h1>Welcome to React App</h1>
      <Todo></Todo>
      <Average></Average>
      <AddNos no1={2} no2={3}></AddNos>
      <Minicalculator no1={6} no2={3} operation="add"></Minicalculator>
    </div>
  );
}
export default App;
