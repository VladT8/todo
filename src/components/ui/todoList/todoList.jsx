import { TodoItem } from "../todoItem/todoItem";
import "./todoList.scss";

export const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className="todo-list">
      {!todos.length && (
        <h2 className="todo-list__empty">Your todo list is empty</h2>
      )}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
};
