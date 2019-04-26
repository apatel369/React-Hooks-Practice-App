import React, { useState } from "react";
import axios from "axios";

const todo = props => {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodolist] = useState([]);

  // const [todoState, setTodoState] = useState({userInput: '', todoList: []});

  const inputChangeHandler = event => {
    // setTodoState({
    //     userInput: event.target.value,
    //     todoList: todoState.todoList});
    setTodoName(event.target.value);
  };

  const todoAddHandler = () => {
    // setTodoState({
    //     userInput: todoState.userInput,
    //     todoList: todoState.todoList.concat(todoState.userInput)
    // }) ;
    setTodolist(todoList.concat(todoName));
    // axios.post
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={todoName}
      />
      <button type="button" onClick={todoAddHandler}>
        Add
      </button>
      <ul>
        {todoList.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default todo;
