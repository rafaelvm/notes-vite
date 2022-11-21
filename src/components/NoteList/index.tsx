import { NoteListContainer } from "./styles";
import NoteCard, { NoteCardProps } from "../NoteCard";

type NoteListProps = {
  notesList: NoteCardProps[];
  removeNote: (item: NoteCardProps) => void;
};

function NoteList({ notesList, removeNote }: NoteListProps) {
  return (
    <NoteListContainer>
      {notesList.map((item, index) => {
        return (
          <NoteCard
            key={index}
            title={item.title}
            description={item.description}
            onRemove={() => removeNote(item)}
          />
        );
      })}
    </NoteListContainer>
  );
}

export default NoteList;
