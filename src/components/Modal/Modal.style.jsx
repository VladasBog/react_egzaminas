import styled from "styled-components";

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    max-width: 90%;

    span {
      display: flex;
      justify-content: end;
      font-size: 24px;
      max-width: 1020px;
      margin: 0 auto;
    }

    span {
      cursor: pointer;
    }
    @media screen and (min-width: 768px) {
      width: 90%;
    }
  }
`;
