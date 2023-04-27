import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export type UseLoginProps = {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: FieldErrors<FieldValues>;
  onSubmit: (data: LoginFormValues) => void;
};

export interface LoginFormValues extends FieldValues {
  user?: string;
}
