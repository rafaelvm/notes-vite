import { useAuth } from "../../context/Auth";
import { useNavigate } from "react-router-dom";
import { LoginFormValues, UseLoginProps } from "./types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./validation";

export const useLogin = (): UseLoginProps => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const onSubmit = (data: LoginFormValues) => {
    login(data.user);
    navigate("/home");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: "all",
    defaultValues: { user: "" },
    resolver: zodResolver(schema),
  });

  return { register, handleSubmit, errors, onSubmit };
};
