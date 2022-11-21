import styled from "styled-components";

export const ButtonContainer = styled.button`
  margin-top: 20px;
  padding: 8px;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  align-self: flex-end;
  width: 200px;
  background-color: var(--secondary);
  color: white;
  border-radius: 4px;
  opacity: 1;

  &:hover {
    opacity: 0.85;
  }
`;
