import { autoCapitalize } from "../../utils/autoCapitalize";
import { useAuth } from "../../context/Auth";
import { Button } from "../Button";
import { Container, ItemWrapper } from "./styles";

export const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <Container>
      <h2>Note List App</h2>
      {user && (
        <ItemWrapper>
          <p>Bem-vindo {autoCapitalize(user)}!</p>

          <Button
            variant="outlined"
            size="small"
            onClick={logout}
            labelDescription="Sair"
          />
        </ItemWrapper>
      )}
    </Container>
  );
};
