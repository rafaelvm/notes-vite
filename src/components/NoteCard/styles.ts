import styled from "styled-components";

export const NoteCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--bottom-details);
  border-radius: 4px;
  flex-wrap: wrap;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  padding: 16px;
`;

export const NoteCardHeader = styled.header`
  font-size: 1.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NoteCardTitle = styled.h3`
  font-size: 1.2em;
  margin-right: 12px;
`;

export const NoteCardText = styled.p`
  margin-top: 8px;
  font-size: 1em;
`;
