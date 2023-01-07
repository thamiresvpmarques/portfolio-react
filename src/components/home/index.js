import * as Styled from "./style";
import imageThamires from "../../images/photo-perfil.jpeg";

export const Home = () => {
  return (
    <Styled.Main>
      <Styled.Img src={imageThamires} alt="foto de perfil" />

      <Styled.data>
        <h2>Thamires Marques</h2>
        <h3>Desenvolvedora Frontend</h3>
      </Styled.data>
    </Styled.Main>
  );
};
