import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  padding: 8px 40px;
  border: 2px solid transparent;
  font-size: 16px;
  border-radius: 6px;
  &:hover {
    cursor: pointer;
  }

  ${({ color }) =>
    color === "primary" &&
    css`
      background-color: #f2796e;
      color: #fff;
      font-weight: 700;

      &:hover {
        opacity: 0.8;
      }
    `}

  ${({ color }) =>
    color === "socialGoogle" &&
    css`
      background-color: #fff;
      color: #000;
      border: 2px solid #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      gap: 10px;
      &:hover {
        opacity: 0.8;
      }
    `}
    ${({ color }) =>
    color === "socialFacebook" &&
    css`
      background-color: #4f70b5;
      color: #fff;

      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      gap: 10px;

      &:hover {
        opacity: 0.8;
      }
    `}
`;
