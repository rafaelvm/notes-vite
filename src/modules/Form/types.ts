import { NoteCardProps } from "components/NoteCard/types";
import { ChangeEvent } from "react";

export type UseFormProps = {
  note: NoteCardProps;
  handleTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDescription: (event: ChangeEvent<HTMLInputElement>) => void;
  sendForm: () => void;
  removeNote: (note: NoteCardProps) => void;
  itemsList: NoteCardProps[];
};
