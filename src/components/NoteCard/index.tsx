import {
  NoteCardContainer,
  NoteCardTitle,
  NoteCardText,
  TitleWrapper,
} from "./styles";
import closeImg from "../../assets/close.svg";
import { autoCapitalize } from "../../utils/autoCapitalize";

export type NoteCardProps = {
  title: string;
  description: string;
  onRemove?: () => void;
};

function NoteCard({ title, description, onRemove }: NoteCardProps) {
  return (
    <NoteCardContainer>
      <TitleWrapper>
        <NoteCardTitle>{autoCapitalize(title)}</NoteCardTitle>
        <img src={closeImg} alt="Fechar modal" onClick={onRemove} />
      </TitleWrapper>

      <NoteCardText>{autoCapitalize(description)}</NoteCardText>
    </NoteCardContainer>
  );
}

export default NoteCard;
