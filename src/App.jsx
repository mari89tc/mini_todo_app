import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [items, setItems] = useState([
    {
      task: "Handle ind",
      completed: false,
      id: 1,
    },
    {
      task: "Fodre kat",
      completed: true,
      id: 2,
    },
  ]);
  function addItem(newItem) {
    setItems((oldState) => oldState.concat(newItem));
  }
  function deleteItem(id) {
    setItems((old) => old.filter((item) => item.id !== id));
  }
  function toggleCompleted(id) {
    setItems((old) => {
      return old.map((item) => {
        if (item.id === id) {
          const copy = { ...item };
          copy.completed = !copy.completed;
          return copy;
        }
        return item;
      });
    });
  }
  return (
    <main className="p-20 bg-red-50">
      <h1 className="mb-10">Mini Todo App</h1>
      <Form addItem={addItem} />
      <List toggleCompleted={toggleCompleted} deleteItem={deleteItem} items={items} />
    </main>
  );
}

export default App;
