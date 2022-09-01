import { useState, useRef, useEffect } from "react";

// Components
import Button from "../Button/Button";

// Styles
import {
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  StyledInputWrapper,
} from "./Form.style";

// Icons
import { BsPerson, BsLock } from "react-icons/bs";
import { GoMail } from "react-icons/go";

const Form = () => {
  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validationMessage, setValidationMessage] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Refs
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const initialSubmit = useRef(true);

  // Side effects
  useEffect(() => {
    if (!initialSubmit.current) {
      validateInputs(name, email, password);
    }
  }, [name, email, password]);

  const validateInputs = (name, email, password) => {
    let isNameValid;
    let isEmailValid;
    let isPasswordValid;

    //    Inputs validation logic
    if (name.length < 1) {
      nameRef.current.style.borderColor = "#f2796e";
      isNameValid = false;
    } else {
      nameRef.current.style.borderColor = "#027E04";
      isNameValid = true;
    }
    if (!email.includes("@")) {
      emailRef.current.style.borderColor = "#f2796e";
      isEmailValid = false;
    } else {
      emailRef.current.style.borderColor = "#027E04";
      isEmailValid = true;
    }
    if (password.length < 1) {
      passwordRef.current.style.borderColor = "#f2796e";
      isPasswordValid = false;
    } else {
      passwordRef.current.style.borderColor = "#027E04";
      isPasswordValid = true;
    }

    // Validation messages
    setValidationMessage({
      name: isNameValid ? "" : "Username cannot be blank",
      email: isEmailValid ? "" : "Email cannot be blank",
      password: isPasswordValid ? "" : "Password cannot be blank",
    });
  };

  //   Functions
  const handleSubmit = (e) => {
    e.preventDefault();

    const areInputsValid = validateInputs(name, email, password);
    initialSubmit.current = false;

    if (!areInputsValid) {
      return;
    }

    return areInputsValid;
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <StyledInputWrapper ref={nameRef}>
          <BsPerson />
          <StyledInput
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"John Doe"}
          />
        </StyledInputWrapper>
        {validationMessage.name && (
          <StyledErrorMessage>{validationMessage.name}</StyledErrorMessage>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <StyledInputWrapper ref={emailRef}>
          <GoMail />
          <StyledInput
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"abc@gmail.com"}
          />
        </StyledInputWrapper>
        {validationMessage.email && (
          <StyledErrorMessage>{validationMessage.email}</StyledErrorMessage>
        )}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <StyledInputWrapper ref={passwordRef}>
          <BsLock />
          <StyledInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          />
        </StyledInputWrapper>
        {validationMessage.password && (
          <StyledErrorMessage>{validationMessage.password}</StyledErrorMessage>
        )}
      </div>
      <Button text={"Submit"} color={"primary"} type={"submit"} />
    </StyledForm>
  );
};

export default Form;
