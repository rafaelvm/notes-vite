import { useAuth } from "../../context/Auth";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title, Wrapper } from "./styles";
import InputText from "../InputText";
import Button from "../Button";

export const Login = () => {
  const [user, setUser] = useState("");
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    login(user);
    navigate("/home");
  };

  return (
    <Wrapper>
      <Title>Login</Title>
      <InputText
        placeholder="Escreva seu nome"
        type="text"
        value={user}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setUser(event.target.value)
        }
      />

      <Button
        onClick={handleLogin}
        variant="flat"
        labelDescription="Entrar"
        disabled={!user}
      />
    </Wrapper>
  );
};
