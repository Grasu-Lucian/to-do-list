import React from "react";

export default function List(props) {
  console.log(props.task);
  return (
    <div className='list'>
      {props.task.map((task, key) => (
        <div className='to-do' key={key}>{task}</div>
      ))}
    </div>
  );
}
