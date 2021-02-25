import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // console.log(todo);
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newArr = [todo, ...todos];
    setTodos(newArr);
    // console.log(...todos);
  };

  const removeTodo = (id) => {
    // a new array that filter out the todos array based on the condition (id)
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const updateTodo = (id, editText) => {
    // console.log(editText);
    // if (!editText.trim()) {
    //   return;
    // }
    // const updateArr = todos.map((todo) => {
    //   if (todo.id === id) {
    //     return { ...todos, text: editText };
    //   }
    //   return todo;
    // });
    // setTodos(updateArr);

    if (!editText.text || /^\s*$/.test(editText.text)) {
      return;
    }
    // setState has an ability to call the previous state in a function
    // setTodos((prev) => console.log(prev));
    setTodos((prev) => prev.map((item) => (item.id === id ? editText : item)));
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      // console.log(todo);
      return todo;
    });
    // map will create a new array, so we dont need to use spread operator to aviod changing the state directly
    // setTodos([updatedTodos, ...todos]);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};
