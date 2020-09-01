import React from "react";
import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (
  <section className="section">
    <section className="section__header">
      <h2 className="section__title">{title}</h2>
      {extraHeaderContent}
    </section>
    {body}
  </section>
);

export default Section;
