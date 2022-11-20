import styled from "styled-components";

export const NoteListContainer = styled.ul`
  background-color: var(--bottom);
  flex-grow: 3;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  list-style-type: none;
  padding: 24px 0 0 24px;
`;

export const NoteListItem = styled.li`
  margin: 12px;
  max-width: 240px;
  max-height: 400px;
`;
