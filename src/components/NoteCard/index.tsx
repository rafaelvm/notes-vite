import { NoteCardContainer, NoteCardTitle, NoteCardText } from "./styles";

export type NoteCardProps = {
  title: string;
  description: string;
};

function NoteCard({ title, description }: NoteCardProps) {
  return (
    <NoteCardContainer>
      <NoteCardTitle>{title}</NoteCardTitle>
      <NoteCardText>{description}</NoteCardText>
    </NoteCardContainer>
  );
}

export default NoteCard;
