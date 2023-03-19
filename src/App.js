import './App.css';
import React from "react";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import useLocalStorageState from "./components/LocalStorage";

function App() {
  const [toDoList, setToDoList] = useLocalStorageState("toDoList", []);

  const handleAddToDo = (newToDo) => {
    setToDoList([...toDoList, { id: Date.now(), text: newToDo }]);
  };

  const handleDeleteToDo = (id) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  const handleEditToDo = (id, updatedText) => {
    setToDoList(
      toDoList.map((item) =>
        item.id === id ? { ...item, text: updatedText } : item
      )
    );
  };

  return (
    <div className="App">
      <AddToDo onAddToDo={handleAddToDo} />
      <ToDoList
        toDoList={toDoList}
        onDeleteToDo={handleDeleteToDo}
        onEditToDo={handleEditToDo}
      />
    </div>
  );
}

export default App;
