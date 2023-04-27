import { FormContainer } from "./styles";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { NoteList } from "../../components/NoteList";
import Textarea from "../../components/Textarea";
import { useForm } from "./useForm";

export const Form = () => {
  const {
    note,
    handleTitle,
    handleDescription,
    sendForm,
    removeNote,
    itemsList,
  } = useForm();

  return (
    <>
      <FormContainer>
        <InputText
          placeholder="Escreva seu título"
          value={note?.title || ""}
          onChange={handleTitle}
          maxLength="20"
        />
        <Textarea
          placeholder="Escreva sua nota"
          rows="8"
          value={note?.description || ""}
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
};
