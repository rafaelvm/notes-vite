import styled, { css } from "styled-components";

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.secondary};
    height: 56px;
    color: ${theme.colors.white};
    font-size: 22px;
    padding: 0 24px;
  `}
`;

export const ItemWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    gap: 40px;

    button {
      margin: 0 0 6px 0;
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.white};
      border: none;
      width: 40px;
    }
  `}
`;
