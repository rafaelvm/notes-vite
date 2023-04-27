import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export type ErrorMessageProps = {
  message: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
};
