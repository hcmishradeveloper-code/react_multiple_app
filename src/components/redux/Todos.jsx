import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./todoSlice";

function Todos() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const addTodosHandler = () => {
    if (!text.trim()) return;
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todos"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodosHandler();
          }
        }}
        style={{ width: "250px", padding: "5px 10px", borderRadius: "12px" }}
      />
      <button
        onClick={addTodosHandler}
        style={{ padding: "5px", borderRadius: "12px", cursor: "pointer", marginLeft:'5px' }}
      >
        Add Todos
      </button>
      {todos.length > 0 && (
        <div
          style={{
            marginTop: "10px",
            border: "1px solid black",
            width: "300px",
            background: "lightGreen",
            borderRadius: "9px",
          }}
        >
          {todos.length > 0 &&
            todos.map((todo) => (
              <div
                key={todo.id}
                style={{
                  listStyleType: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "2px 10px",
                  background: "skyblue",
                  margin: "5px",
                }}
              >
                <li>{todo.text}</li>
                <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>
                  Delete
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Todos;
