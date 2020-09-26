import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  background-color: #ffffff;
  padding: 20px;
  margin: 2px;
`;

export const SubSection = styled(Section)`
  font-size: 24px;
  font-weight: bold;
`;

export const Header = styled(Section)`
  padding: 0;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    flex-direction: column;
  }
`;
