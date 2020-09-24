import React, {useState, useRef} from "react";
import "./style.css";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const inputFocus = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") {
      return;
    }
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
    inputFocus();
  };

  return (
    <form className="section__form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        className="section__input"
        placeholder="What needs to be done?"
        onChange={({target}) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <button className="section__btn">Add task</button>
    </form>
  );
};

export default Form;
