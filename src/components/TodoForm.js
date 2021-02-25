import React, { useState, useEffect, useRef } from "react";
import { v4 as uuid } from "uuid";

export const TodoForm = (props) => {
  // const [input, setInput] = useState("");
  // this state will keep previous value when you edit
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: uuid(),
      text: input,
    });
    // reset input
    setInput("");

    // if (input.trim()) {
    //   addTodo({
    //     id: uuid(),
    //     text: input.trim(),
    //   });
    //   // reset input
    //   setInput("");
    // }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add todo</button>
        </>
      )}
    </form>
  );
};
