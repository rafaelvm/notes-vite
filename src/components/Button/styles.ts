import styled from "styled-components";

export const ButtonContainer = styled.button`
  margin-top: 8px;
  padding: 4px;
  border: none;
  background-color: var(--bottom-details);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  align-self: flex-end;
  width: 30%;
  background-color: var(--secondary);
  color: white;
  font-weight: 400;

  &:active {
    background-color: var(--secondary-active);
  }
`;
