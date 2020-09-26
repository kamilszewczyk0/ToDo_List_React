import React, {useState, useRef} from "react";
import {TaskForm, Input, Button} from "./styled";

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
    <TaskForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        placeholder="What needs to be done?"
        onChange={({target}) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <Button>Add task</Button>
    </TaskForm>
  );
};

export default Form;
