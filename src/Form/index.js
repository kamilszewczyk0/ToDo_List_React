import React, {useState} from "react";
import "./style.css";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() === "") {
      return;
    }
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form className="section__form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        className="section__input"
        placeholder="What needs to be done?"
        onChange={({target}) => setNewTaskContent(target.value)}
      />
      <button className="section__btn">Add task</button>
    </form>
  );
};

export default Form;
