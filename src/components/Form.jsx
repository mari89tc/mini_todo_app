export default function Form() {
  return (
    <div className="flex m-2 gap-3">
      <form>
        <label htmlFor="addSome"></label>
        <input className="p-4 bg-red-200 rounded" id="addSome" name="addSome" type="text" placeholder="Add ToDo" />
      </form>
      <button className="p-4 bg-red-300 hover:bg-red-500">Add</button>
    </div>
  );
}
