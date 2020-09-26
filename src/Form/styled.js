import styled from "styled-components";

export const TaskForm = styled.form`
  display: flex;
  background-color: #ffffff;
  padding: 20px;
  margin: 2px;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    flex-wrap: wrap;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
`;

export const Button = styled.button`
  margin-left: 30px;
  padding: 0 20px;
  color: #ffffff;
  background-color: teal;
  border: none;

  &:hover {
    transform: scale(1.04);
    background-color: hsl(180, 100%, 30%);
    transition: 0.15s;
    cursor: pointer;
  }

  &:active {
    background-color: hsla(188, 100%, 26%, 0.534);
    transition: background-color 0.05s;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    flex-basis: 100%;
    margin: 20px 0;
    padding: 15px;
  }
`;
