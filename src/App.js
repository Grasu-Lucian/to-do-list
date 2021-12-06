import "./App.css";
import AddList from "./AddList";
import { useState } from "react";
import List from "./List";

function App() {
  const addUserHandler = (uArray) => {
    return setArray([...Array, uArray]);
  };

  const [Array, setArray] = useState([]);
  return (
    <div className="App">
      To do list
      <AddList onAddUser={addUserHandler} />
      <List task={Array} />
    </div>
  );
}

export default App;
