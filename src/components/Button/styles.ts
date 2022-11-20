import styled from "styled-components";

export const ButtonContainer = styled.button`
  margin-top: 8px;
  padding: 4px;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  align-self: flex-end;
  width: 30%;
  background-color: var(--secondary);
  color: white;
  font-weight: 400;
  border-radius: 4px;
  cursor: pointer;
  opacity: 1;

  &:hover {
    opacity: 0.85;
  }
`;
