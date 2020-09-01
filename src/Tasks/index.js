import React from "react";
import "./style.css";

const Tasks = (props) => (
  <ul className="section__list">
    {props.tasks.map((task) => (
      <li
        className={`task__item${
          task.done && props.hideDoneTasks ? " tasks__item--hidden" : ""
        }`}>
        <button className="list__doneBtn ">{task.done ? "✔" : ""}</button>
        <p className={`list__task${task.done ? " list__task--done" : ""}`}>
          {task.content}
        </p>
        <button className="list__removeBtn">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
