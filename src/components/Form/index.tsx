import { useState } from "react";
import { FormContainer } from "./styles";
import Button from "../Button";
import InputText from "../InputText";
import NoteList from "../NoteList";
import Textarea from "../Textarea";
import { toast } from "react-toastify";

export function Form() {
  const [note, setNote] = useState({ title: "", description: "" });
  const [itemsList, setItemsList] = useState([]);

  function handleTitle(event) {
    setNote((prevState) => ({ ...prevState, title: event.target.value }));
  }

  function handleDescription(event) {
    setNote((prevState) => ({ ...prevState, description: event.target.value }));
  }

  function sendForm() {
    if (note.title && note.description) {
      setItemsList((prevState) => [...prevState, note]);
      setNote({ title: "", description: "" });
    }

    toast.success("Nota adicionada com sucesso!");
  }

  function removeNote(note) {
    const newArray = itemsList.filter((item) => item.title !== note.title);
    setItemsList(newArray);

    toast.success("Nota excluída com sucesso!");
  }

  return (
    <>
      <FormContainer>
        <InputText
          placeholder="Escreva seu título"
          value={note.title}
          onChange={handleTitle}
          maxLength="20"
        />
        <Textarea
          placeholder="Escreva sua nota"
          rows="8"
          value={note.description}
          onChange={handleDescription}
          maxLength="120"
        />
        <Button
          labelDescription="Criar nota"
          onClick={sendForm}
          type="button"
          variant="flat"
          size="small"
          disabled={!note?.title || !note?.description}
        />
      </FormContainer>

      <NoteList notesList={itemsList} removeNote={removeNote} />
    </>
  );
}

export default Form;
