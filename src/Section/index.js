import React from "react";
import {MainSection, Header, SubSection} from "./styled";

const Section = ({title, body, extraHeaderContent}) => (
  <MainSection>
    <Header>
      <SubSection>{title}</SubSection>
      {extraHeaderContent}
    </Header>
    {body}
  </MainSection>
);

export default Section;
