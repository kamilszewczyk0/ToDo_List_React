import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: inherit;
  border: none;
  padding: 0;
  margin: 0 40px;
  color: teal;
  transition: 0.2ss ease-out;

  &:disabled {
    color: rgb(196, 195, 195);
  }

  &:hover {
    color: hsl(180, 100%, 40%);
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    flex-basis: 100%;
    margin: 10px 0;
  }
`;
