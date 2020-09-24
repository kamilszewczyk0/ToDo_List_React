import styled, {css} from "styled-components";

export const List = styled.ul`
  background-color: ${({theme}) => theme.colors.white};
  list-style: none;
  padding: 30px 25px;
  margin: 2px;
`;

export const Item = styled.li`
  margin: 12px;
  display: flex;
  align-items: center;

  ${({hidden}) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.p`
  margin: 0;
  flex-basis: 100%;
  padding: 0 15px;
  overflow-wrap: break-word;

  ${({done}) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

const Button = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  color: ${({theme}) => theme.colors.white};
  font-size: 20px;
  cursor: pointer;
  flex-shrink: 0;
  text-align: center;
`;

export const DoneButton = styled(Button)`
  background-color: #197a1e;

  &:hover {
    background-color: hsl(123, 66%, 39%);
    transition: 0.15s;
  }
`;

export const RemoveButton = styled(Button)`
  background-color: #ec2539;

  &:hover {
    background-color: hsl(354, 84%, 64%);
    transition: 0.15s;
  }
`;
