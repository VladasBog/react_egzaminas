import { StyledButton } from "./Button.style";

const Button = ({ text, action, socialIcon, color, type }) => {
  return (
    <StyledButton onClick={action} color={color} type={type}>
      {socialIcon} {text}
    </StyledButton>
  );
};

export default Button;
