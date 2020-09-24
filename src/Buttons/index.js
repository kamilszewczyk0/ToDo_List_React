import React from "react";
import {ButtonsContainer, Button} from "./styled";

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone}) =>
  tasks.length > 0 && (
    <ButtonsContainer>
      <Button onClick={toggleHideDone}>
        {hideDone ? "Show" : "Hide"} done tasks
      </Button>
      <Button onClick={setAllDone} disabled={tasks.every(({done}) => done)}>
        Mark all as done
      </Button>
    </ButtonsContainer>
  );

export default Buttons;
