import React from "react";
import "./style.css";

const Tasks = ({tasks, hideDone}) => (
  <ul className="section__list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`task__item${
          task.done && hideDone ? " tasks__item--hidden" : ""
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
