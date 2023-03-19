import React, { useState } from "react";
import ToDo from "./ToDo";

function ToDoList({ toDoList, onDeleteToDo, onEditToDo }) {
  const [editItem, setEditItem] = useState(null);

  const handleDelete = (id) => {
    onDeleteToDo(id);
  };

  const handleEdit = (id) => {
    setEditItem(id);
  };

  const handleSave = (id, updatedText) => {
    onEditToDo(id, updatedText);
    setEditItem(null);
  };

  return (
    <ul className="Todo">
      {toDoList.map((item) => (
        <ToDo
          key={item.id}
          item={item}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onSave={handleSave}
          isEditing={editItem === item.id}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
