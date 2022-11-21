import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

export type ButtonProps = {
  variant?: "outlined" | "flat";
  size?: "small" | "medium" | "large";
  labelDescription?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  labelDescription,
  variant = "outlined",
  size,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} size={size} {...rest}>
      {labelDescription}
    </ButtonContainer>
  );
}

export default Button;
