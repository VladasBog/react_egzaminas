import styled from "styled-components";
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 30px 60px 30px;
  background-color: #fff;
  label {
    font-size: 18px;
  }

  button {
    margin-top: 20px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline: none;

  font-size: 20px;
  ::placeholder {
    color: #e0e0e0;
  }
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #e0e0e0;
  padding: 7px 10px;
  border-radius: 5px;
  margin-top: 4px;

  svg {
    color: #999999;
    font-size: 20px;
    margin-right: 8px;
  }
`;

export const StyledErrorMessage = styled.p`
  margin-top: 4px;
  font-size: 18px;
  color: #f2796e;
`;
