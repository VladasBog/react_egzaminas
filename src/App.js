import { useState } from "react";
import {
  StyledArticle,
  StyledChildrenWrapper,
  StyledImageBackground,
  StyledParagraph,
  StyledSignupWrapper,
} from "./App.style";
import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import Modal from "./components/Modal";

import { BsFacebook, BsGoogle } from "react-icons/bs";

function App() {
  // State
  const [openModal, setOpenModal] = useState(false);
  return (
    <main>
      <Button
        action={() => setOpenModal(true)}
        text={"Open Modal"}
        color={"primary"}
      />
      {openModal && (
        <Modal
          onClose={() => setOpenModal(false)}
          hasCloseOnOuter
          closeOnEscape
        >
          <StyledChildrenWrapper>
            <StyledImageBackground>
              <div>
                <img src="https://svgshare.com/i/_go.svg" alt="svg-logo" />
              </div>
              <p>Start for free &#38; Get Attractive offers Today !</p>
            </StyledImageBackground>
            <section>
              <StyledArticle>
                <h1>Get Started</h1>
                <p>Already have an account?</p>
                <a href="login">Log in</a>
                <StyledSignupWrapper>
                  <Button
                    color={"socialGoogle"}
                    text="sign up"
                    socialIcon={<BsGoogle />}
                  />
                  <Button
                    color={"socialFacebook"}
                    text="sign up"
                    socialIcon={<BsFacebook />}
                  />
                </StyledSignupWrapper>
              </StyledArticle>
              <StyledParagraph>Or</StyledParagraph>
              <Form />
            </section>
          </StyledChildrenWrapper>
        </Modal>
      )}
    </main>
  );
}

export default App;
