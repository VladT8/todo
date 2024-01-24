import "./todoItem.scss";

export const TodoItem = ({ todo }) => {
  return (
    <div className="todo-list__item">
      <h4>{todo}</h4>
    </div>
  );
};
