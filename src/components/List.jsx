import ListItem from "./ListItem";

export default function List({ items, deleteItem, toggleCompleted }) {
  return (
    <div>
      <h2 className="text-4xl m-10">Some ToDo List</h2>
      <h3 className="text-xl underline">My ToDo</h3>
      <ul>
        {items
          .filter((i) => !i.completed)
          .map((item) => (
            <ListItem toggleCompleted={toggleCompleted} deleteItem={deleteItem} key={item.id} {...item} />
          ))}
      </ul>
      <h3 className="text-xl underline">Done Todo</h3>
      <ul>
        {items
          .filter((i) => i.completed)
          .map((item) => (
            <ListItem toggleCompleted={toggleCompleted} deleteItem={deleteItem} key={item.id} {...item} />
          ))}
      </ul>
    </div>
  );
}
