import styled, { css } from "styled-components";

export const TextareaWrapper = styled.textarea`
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
