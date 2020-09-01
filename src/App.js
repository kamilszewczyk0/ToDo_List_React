import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  {id: 1, content: "przejść na Reacta", done: false},
  {id: 2, content: "zjeść obiad", done: true},
];

const hideDoneTasks = false;

function App() {
  return (
    <div>
      <Container>
        <Header title="ToDo List" />
        <Section title="Add new task" body={<Form />} />
        <Section
          title="Task List"
          extraHeaderContent={
            <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
          }
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        />
      </Container>
    </div>
  );
}

export default App;
