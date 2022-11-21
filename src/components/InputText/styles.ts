import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    margin-top: 8px;
    padding: 8px;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 4px;
    border: 1px solid ${theme.colors.secondary};

    &:focus {
      outline: none;
    }
  `}
`;
