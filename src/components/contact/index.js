import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

import * as Styled from "./style";

export const Contact = () => {
  return (
    <Styled.Footer id="contact">
      <Styled.ContactContainer>
        <h2>Me envie uma mensagem!</h2>
        <Styled.LinksSocial>
          <a href="https://www.linkedin.com/in/thamires-marques-1130b2248/">
            <AiFillLinkedin />
          </a>
          
          <a href="https://github.com/thamiresvpmarques">
            <AiFillGithub />
          </a>
        </Styled.LinksSocial>
      </Styled.ContactContainer>
    </Styled.Footer>
  );
};
