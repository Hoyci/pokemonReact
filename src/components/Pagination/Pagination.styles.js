import styled from "styled-components";
import { Link } from "react-router-dom";

export const PaginationContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-bottom: 20px;
`;

export const PaginationItem = styled(Link)`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  text-decoration: none;
  background-color: ${({ firstAndLast }) => (firstAndLast ? "#FFEA7B" : "")};
  background-color: ${({ selected }) => (selected ? "#EBEBEB" : "")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "")};
  &:hover {
    background-color: "#FFEA7B";
  }
  @media only screen and (max-width: 600px) {
    padding: 0 8px;
    font-size: 13px;
  }
`;

export const Dots = styled.li`
  color: black;
  cursor: default;
`;
