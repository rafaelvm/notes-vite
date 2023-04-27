import { Title, Wrapper } from "./styles";
import { Button } from "../../components/Button";
import { useLogin } from "./useLogin";
import { Input } from "../../components/InputText/styles";
import { ErrorMessage } from "../../components/ErrorMessage";

export const Login = () => {
  const { handleSubmit, register, errors, onSubmit } = useLogin();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <Title>Login</Title>
        <Input
          {...register("user")}
          placeholder="Escreva seu nome"
          type="text"
        />
        {errors?.user && <ErrorMessage message={errors?.user?.message} />}

        <Button variant="flat" labelDescription="Entrar" type="submit" />
      </Wrapper>
    </form>
  );
};
