import styled, { css } from "styled-components";

export const NoteCardContainer = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    border-radius: 4px;
    padding: 16px;
    word-break: break-all;
    height: 210px;
    cursor: pointer;
  `}
`;

export const NoteCardTitle = styled.h3`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    margin: 0;
    font-size: 1.8rem;
    color: ${theme.colors.white};
  `}
`;

export const NoteCardText = styled.p`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    margin-top: 6px;
    font-size: 1.2rem;
  `}
`;
