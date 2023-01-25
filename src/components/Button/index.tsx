import { ButtonContainer } from "./styles";
import { ButtonProps } from "./types";

export const Button = ({
  labelDescription,
  variant = "outlined",
  size,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonContainer variant={variant} size={size} {...rest}>
      {labelDescription}
    </ButtonContainer>
  );
};
