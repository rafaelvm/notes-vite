import { NoteListContainer } from "./styles";
import { NoteCard } from "../NoteCard";
import { NoteListProps } from "./types";

export const NoteList = ({ notesList, removeNote }: NoteListProps) => {
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
};
