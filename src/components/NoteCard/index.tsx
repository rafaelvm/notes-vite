import {
  NoteCardContainer,
  NoteCardHeader,
  NoteCardTitle,
  NoteCardText,
} from "./styles";

export type NoteCardProps = {
  title: string;
  description: string;
};

function NoteCard({ title, description }: NoteCardProps) {
  return (
    <NoteCardContainer>
      <NoteCardHeader>
        <NoteCardTitle>{title}</NoteCardTitle>
      </NoteCardHeader>
      <NoteCardText>{description}</NoteCardText>
    </NoteCardContainer>
  );
}

export default NoteCard;
