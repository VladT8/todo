import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppTitle } from "./components/ui/appName/appTitle";
import { TodoForm } from "./components/ui/todoForm/todoForm";
import { TodoList } from "./components/ui/todoList/todoList";
import { TodoActions } from "./components/ui/todoActions/todoActions";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const reseteTodoHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  return (
    <div className="App">
      <AppTitle />
      <TodoForm addTodo={addTodoHandler} />
      <TodoActions
        reset={reseteTodoHandler}
        deleteComplited={deleteCompletedTodoHandler}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  );
}

export default App;
