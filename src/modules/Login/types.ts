import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { schema } from "./validation";
import { z } from "zod";

export type UseLoginProps = {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  errors: FieldErrors<FieldValues>;
  onSubmit: (data: LoginFormDataProps) => void;
};

export type LoginFormDataProps = z.infer<typeof schema>;
