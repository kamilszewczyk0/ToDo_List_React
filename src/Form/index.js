import React from "react";
import "./style.css";

const Form = () => (
  <form className="section__form">
    <input className="section__input" placeholder="What needs to be done?" />
    <button className="section__btn">Add task</button>
  </form>
);

export default Form;
