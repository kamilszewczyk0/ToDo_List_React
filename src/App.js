import React from "react";

function App() {
  return (
    <div>
      <main className="container">
        <section className="section">
          <h1 className="section__header--main">ToDo List</h1>
          <label className="section__label">Add new task</label>
          <form className="section__form js-form">
            <input
              className="section__input js-newTask"
              placeholder="What needs to be done?"
            />
            <button className="section__btn js-addNewTaskBtn">Add task</button>
          </form>
        </section>
        <section className="section">
          <section className="section__header">
            <h2 className="section__title">Task List</h2>
            <div className="buttons js-buttons"></div>
          </section>
          <ul className="section__list js-tasks"></ul>
        </section>
      </main>
    </div>
  );
}

export default App;
