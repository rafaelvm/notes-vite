import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

type ButtonProps = {
  labelDescription: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ labelDescription, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest}>{labelDescription}</ButtonContainer>;
}

export default Button;
