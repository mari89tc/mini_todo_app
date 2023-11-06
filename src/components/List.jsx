import ListItem from "./ListItem";

export default function List() {
  return (
    <div>
      <h2 className="text-xl">Some List</h2>
      <ul>
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  );
}
