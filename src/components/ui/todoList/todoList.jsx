import { TodoItem } from "../todoItem/todoItem";
import "./todoList.scss";

export const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
};
