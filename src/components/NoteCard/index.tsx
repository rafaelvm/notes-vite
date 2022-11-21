import {
  NoteCardContainer,
  NoteCardTitle,
  NoteCardText,
  TitleWrapper,
} from "./styles";
import closeImg from "../../assets/close.svg";

export type NoteCardProps = {
  title: string;
  description: string;
  onRemove?: () => void;
};

function NoteCard({ title, description, onRemove }: NoteCardProps) {
  return (
    <NoteCardContainer>
      <TitleWrapper>
        <NoteCardTitle>{title}</NoteCardTitle>
        <img src={closeImg} alt="Fechar modal" onClick={onRemove} />
      </TitleWrapper>

      <NoteCardText>{description}</NoteCardText>
    </NoteCardContainer>
  );
}

export default NoteCard;
