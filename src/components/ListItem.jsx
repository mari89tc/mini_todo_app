export default function ListItem() {
  return (
    <li>
      <div className="p-5 flex gap-5">
        <h2 className="self-center">Some Task</h2>
        <button className="bg-red-100 hover:border-solid hover:border-red-500">Complete</button>
      </div>
    </li>
  );
}
