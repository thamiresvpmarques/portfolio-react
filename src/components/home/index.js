import imageThamires from "../../images/photo-perfil.jpeg";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

import * as Styled from "./style";

export const Home = () => {
  return (
    <Styled.Main id="home">
      <Styled.Img src={imageThamires} alt="foto de perfil" />

      <Styled.Informations>
        <h2>Thamires Marques</h2>
        <h3>Desenvolvedora Frontend</h3>
       
         <Styled.Contact>
          <a href="https://www.linkedin.com/in/thamires-marques-1130b2248/">
            <AiFillLinkedin />
          </a>
          <a href="https://wa.me/+5521967783367">
            <AiOutlineWhatsApp />
          </a>
          <a href="https://github.com/thamiresvpmarques">
            <AiFillGithub />
          </a>
        </Styled.Contact>
        </Styled.Informations>  
    </Styled.Main>
  );
};
