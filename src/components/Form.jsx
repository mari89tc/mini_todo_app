export default function Form(props) {
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    props.addItem({
      task: data.get("task"),
      completed: false,
      id: Math.random(),
    });
  }
  return (
    <div>
      <form className="gap-3 flex m-2" onSubmit={onSubmit}>
        <label htmlFor="task"></label>
        <input className="p-4 bg-red-200 rounded" id="task" name="task" type="text" required placeholder="Add ToDo" />
        <button className="p-4 bg-red-300 hover:bg-red-500">Add</button>
      </form>
    </div>
  );
}
