import { TodoItem } from "../todoItem/todoItem";
import "./todoList.scss";

export const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {!todos.length && (
        <h2 className="todo-list__empty">Your todo list is empty</h2>
      )}
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
};
