import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { NoteCardProps } from "../../components/NoteCard/types";
import { UseFormProps } from "./types";

export const useForm = (): UseFormProps => {
  const [note, setNote] = useState<NoteCardProps>({} as NoteCardProps);
  const [itemsList, setItemsList] = useState([]);

  function handleTitle(event: ChangeEvent<HTMLInputElement>) {
    setNote((prevState) => ({ ...prevState, title: event.target.value }));
  }

  function handleDescription(event: ChangeEvent<HTMLInputElement>) {
    setNote((prevState) => ({ ...prevState, description: event.target.value }));
  }

  function sendForm() {
    if (note?.title && note?.description) {
      setItemsList((prevState) => [...prevState, note]);
      setNote({ title: "", description: "" });
    }

    toast.success("Nota adicionada com sucesso!");
  }

  function removeNote(note: NoteCardProps) {
    const newArray = itemsList.filter((item) => item?.title !== note?.title);
    setItemsList(newArray);

    toast.success("Nota excluída com sucesso!");
  }

  return {
    note,
    itemsList,
    handleTitle,
    handleDescription,
    sendForm,
    removeNote,
  };
};
