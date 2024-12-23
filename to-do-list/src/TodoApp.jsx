import React, { useState } from "react";

const TodoApp = () => {
  const [itemsList, setItemsList] = useState([]);

  const addTodo = (item) => {
    if (item !== "") {
      setItemsList([...itemsList, item]);
    }
  };

  const deleteTodo = (item) => {
    let deleteItemIndex = itemsList.indexOf(item);
    setItemsList([
      ...itemsList.slice(0, deleteItemIndex),
      ...itemsList.slice(deleteItemIndex + 1),
    ]);
  };

  return (
    <div>
      <div>
        <h2>Product List</h2>
      </div>
      <TodoForm addTodo={addTodo} />
      <TodoList itemsList={itemsList} deleteTodo={deleteTodo} />
    </div>
  );
};

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <input type="text" value={input} onChange={changeHandler} />
      <button onClick={submitHandler}>Add Todo</button>
    </div>
  );
};

const TodoList = ({ itemsList, deleteTodo }) => (
  <div>
    {itemsList.map((item, index) => (
      <Todo key={index} item={item} deleteTodo={deleteTodo} />
    ))}
  </div>
);

const Todo = ({ item, deleteTodo }) => {
  const handleSubmit = (event) => {
    deleteTodo(item);
  };

  return (
    <li>
      <span>{item + "  "}</span>
      <button onClick={handleSubmit}>Delete</button>
    </li>
  );
};

export default TodoApp;
