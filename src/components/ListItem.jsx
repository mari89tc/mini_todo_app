import styles from "./ListItem.module.css";
export default function ListItem({ completed, id, task, deleteItem, toggleCompleted }) {
  function deleteThis() {
    deleteItem(id);
  }
  return (
    <li className="p-5 flex gap-5">
      <h2 className={completed ? styles.completed : ""}>{task}</h2>
      <button onClick={() => toggleCompleted(id)} className=" bg-red-200 hover:border-solid hover:border-red-500">
        {completed ? "Undo" : "Done!"}
      </button>
      <button onClick={deleteThis} className="bg-red-400 hover:border-solid hover:border-red-500">
        Delete
      </button>
    </li>
  );
}
