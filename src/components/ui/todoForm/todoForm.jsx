import { useState } from "react";
import "./todoForm.scss";

export const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const addSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  return (
    <form className="form" onSubmit={addSubmitHandler}>
      <input
        className="form__input"
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="form__button">Add</button>
    </form>
  );
};
