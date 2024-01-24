import { useState } from "react";
import "./App.css";
import { AppTitle } from "./components/ui/appName/appTitle";
import { TodoForm } from "./components/ui/todoForm/todoForm";
import { TodoList } from "./components/ui/todoList/todoList";

function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }

  return (
    <div className="App">
      <AppTitle />
      <TodoForm addTodo={addTodoHandler}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
