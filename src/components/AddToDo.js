import React, { useState } from "react";

function AddToDo({ onAddToDo }) {
  const [newToDo, setNewToDo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newToDo.trim()) {
      onAddToDo(newToDo);
      setNewToDo("");
    }
  };

  return (
    <div className="TodoWrapper">
      <h1>Do or Die Trying!</h1>
      <form className="TodoForm"  onSubmit={handleSubmit}>
        <input
          type="text"
          value={newToDo}
          className="todo-input"
          onChange={(e) => setNewToDo(e.target.value)}
          placeholder="What's your next wish?"
        />
        <button className="btn todo-btn" type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddToDo;
