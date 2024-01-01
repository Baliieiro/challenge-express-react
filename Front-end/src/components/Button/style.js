import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  width: 350px;
  height: 68px;
  padding: 0px 113px;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.$isBack ? "rgba(255, 255, 255, 0.14)" : "#d93856"};
  border: none;
  cursor: pointer;
  margin: 20px auto 51px;
  font-size: 17px;
  font-style: normal;
  font-weight: 900;
  line-height: 2.5px;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
