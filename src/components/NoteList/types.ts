import { NoteCardProps } from "../NoteCard/types";

export type NoteListProps = {
  notesList: NoteCardProps[];
  removeNote: (item: NoteCardProps) => void;
};
