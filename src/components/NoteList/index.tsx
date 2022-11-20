import { NoteListContainer, NoteListItem } from "./styles";
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
          <NoteListItem key={index} onClick={() => removeNote(item)}>
            <NoteCard title={item.title} description={item.description} />
          </NoteListItem>
        );
      })}
    </NoteListContainer>
  );
}

export default NoteList;
