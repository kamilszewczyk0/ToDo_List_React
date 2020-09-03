import React from "react";
import "./style.css";

const Buttons = ({tasks, hideDone, toggleHideDone}) =>
  tasks.length > 0 && (
    <div className="buttons">
      <button className="buttons__button" onClick={toggleHideDone}>
        {hideDone ? "Show" : "Hide"} done tasks
      </button>
      <button
        className="buttons__button"
        disabled={tasks.every(({done}) => done)}>
        Mark all as done
      </button>
    </div>
  );

export default Buttons;
