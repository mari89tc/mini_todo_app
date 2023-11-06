import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="p-20 bg-red-50">
      <h1 className="mb-10">Mini Todo App</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
