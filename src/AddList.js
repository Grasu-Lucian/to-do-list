import React from "react";
import { useState } from "react";
export default function AddList(props) {
  function KeyEventHandler(e) {
    setNewElement(e.target.value);
  }
  function ClickEventHandler(e) {
    e.preventDefault();

    props.onAddUser(newElement);
    setNewElement("");
  }
  const [newElement, setNewElement] = useState("");

  return (
    <div>
      <form>
        <input type="text" value={newElement} onChange={KeyEventHandler} />
        <button type="submit" onClick={ClickEventHandler}>Add To Do</button>
      </form>
    </div>
  );
}
