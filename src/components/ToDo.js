import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ToDo({ item, onDelete, onEdit, onSave, isEditing }) {
  const [text, setText] = useState(item.text);

  const handleDelete = () => {
    onDelete(item.id);
  };

  const handleEdit = () => {
    onEdit(item.id);
  };

  const handleSave = () => {
    if (text.trim()) {
      onSave(item.id, text);
    }
  };
  return (
    <>
      {isEditing ? (
        <div className="EditItem">
          <input
            type="text"
            className="todo-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="todo-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <div className="todoItem">
          {item.text}
          <div className="todoIcons">
            <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} />
            <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
          </div>
        </div>
      )}
    </>
  );

  // return (
  //   <div className="todoItem">
  //     {isEditing ? (
  //       <div className="EditItem">
  //         <input
  //           type="text"
  //           // className="todo-input"
  //           value={text}
  //           onChange={(e) => setText(e.target.value)}
  //         />
  //         <button className="todo-btn" onClick={handleSave}>Save</button>
  //       </div>
  //     ) : (
  //       <div>{item.text}
  //         <div className="todoIcons">
  //           <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit} />

  //           <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
}

export default ToDo;
