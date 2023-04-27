import { ErrorWrapper } from "./styles";
import { ErrorMessageProps } from "./types";

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <ErrorWrapper>{message}</ErrorWrapper>;
};
