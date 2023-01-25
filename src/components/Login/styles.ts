import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    align-self: center;
    width: 180px;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }
  }
`;

export const Title = styled.h2`
  margin: 24px 0 8px 0;
`;
