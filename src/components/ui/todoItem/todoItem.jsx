import "./todoItem.scss";
import { FaCheck } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
export const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <div
      className={`todo-list__item ${
        todo.isCompleted ? "todo-list__item_completed" : ""
      }`}
    >
      <h4>{todo.text}</h4>
      <RiDeleteBin2Line
        className="todo-list__icon todo-list__icon_red"
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className="todo-list__icon todo-list__icon_green"
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
};
