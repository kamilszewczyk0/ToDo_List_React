import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
  {id: 1, content: "przejść na Reacta", done: false},
  {id: 2, content: "zjeść obiad", done: true},
];

const hideDoneTasks = false;

function App() {
  return (
    <div>
      <main className="container">
        <h1 className="section__header--main">ToDo List</h1>
        <Section title="Add new task" body={<Form />} />
        <Section
          title="Task List"
          extraHeaderContent={
            <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
          }
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        />
      </main>
    </div>
  );
}

export default App;
