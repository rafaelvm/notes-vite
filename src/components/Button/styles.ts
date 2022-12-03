import styled, { css } from "styled-components";
import { IThemeProps } from "styles/theme/types";
import { ButtonProps } from ".";

const modifiers = {
  flat: (theme: IThemeProps) => css`
    background-color: ${theme?.colors?.primary};
  `,
  outlined: (theme: IThemeProps) => css`
    background-color: ${theme?.colors?.white};
    border: 2px solid ${theme?.colors?.primary};
    color: ${theme?.colors?.primary};
  `,
  small: () => css`
    width: 8.5rem;
    height: 2.5rem;
  `,
  medium: () => css`
    width: 10rem;
    height: 3rem;
  `,
  large: () => css`
    width: 15rem;
    height: 4rem;
  `,
};

export const ButtonContainer = styled.button<ButtonProps>`
  ${({ theme, variant, size }) => css`
    margin-top: 20px;
    padding: 8px;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    align-self: flex-end;
    color: white;
    border-radius: 4px;
    opacity: 1;

    &:hover {
      opacity: 0.85;
    }

    ${!!size && modifiers[size]()};
    ${!!variant && modifiers[variant](theme)};
  `}
`;
