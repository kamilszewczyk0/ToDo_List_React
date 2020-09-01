import React from "react";
import Form from "./Form";

const tasks = [
  {id: 1, content: "przejść na Reacta", done: false},
  {id: 2, content: "zjeść obiad", done: true},
];

const hideDoneTasks = false;

function App() {
  return (
    <div>
      <main className="container">
        <section className="section">
          <h1 className="section__header--main">ToDo List</h1>
          <label className="section__label">Add new task</label>
          <Form />
        </section>
        <section className="section">
          <section className="section__header">
            <h2 className="section__title">Task List</h2>
            <div className="buttons"></div>
          </section>
          <ul className="section__list"></ul>
        </section>
      </main>
    </div>
  );
}

export default App;
