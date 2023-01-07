import * as Styled from "./style";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export const Contact = () => {
  return (
    <Styled.Footer>
      <Styled.ContactContainer>
        <h2>Me envie uma mensagem!</h2>
        <Styled.LinksSocial>
          <a href="https://www.linkedin.com/in/thamires-marques-1130b2248/">
            <AiFillLinkedin />
          </a>
          <a href="https://wa.me/+5521967783367">
            <AiOutlineWhatsApp />
          </a>
          <a href="https://github.com/thamiresvpmarques">
            <AiFillGithub />
          </a>
        </Styled.LinksSocial>
      </Styled.ContactContainer>
    </Styled.Footer>
  );
};
