import { TodoItem } from "../todoItem/todoItem";
import "./todoList.scss";

export const TodoList = ({ todos }) => {
  return todos.map((todo, index) => <TodoItem key={index} todo={todo} />);
};
