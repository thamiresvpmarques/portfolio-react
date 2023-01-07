import * as Styled from "./style";
import imageThamires from '../../images/photo-perfil.jpeg'

export const About = () => {
  return (
    <Styled.Section>
      <Styled.Container>
      <Styled.Title>Sobre Mim</Styled.Title>
        <Styled.AboutText>
          <strong>Olá👋🏽, sou Thamires Marques</strong>, tenho 30 anos.Tenho dois
          lindos filhos e nada me faz mais feliz do que ter um tempo de
          qualidade com a minha família.
          <br />A estrutura de ensino tradicional me fez acreditar que nunca
          seria capaz de aprender algo tão complexo como programação. Mas
          entendi que medir o potencial do peixe através de sua capacidade de
          subir em árvores não dá possibilidade reais de desenvolvimento.E hoje
          me encontro uma desenvolvedora em formação em busca da minha primeira vaga como Dev.
        </Styled.AboutText>

        <Styled.CV>Veja meu CV</Styled.CV>
      </Styled.Container>

      <Styled.Profile src={imageThamires} />
    </Styled.Section>
  );
};
