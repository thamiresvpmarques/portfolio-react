import * as Styled from './style'
import "react-responsive-carousel/lib/styles/carousel.min.css";


export const Projects = () => {
  return (
    <Styled.Section>
      <h2>Projetos</h2>
      <Styled.StyledCarousel>
        <a href="https://github.com">
          <img
            src="https://via.placeholder.com/515X700"
            alt="Nome do projeto"
          />
          <h3>Projeto 1</h3>
          <div class="informacoes-projeto">
            <p>Projeto feito usando HTML, CSS e JavaScript</p>
            <p>🔗 Ver no GitHub Pages</p>
          </div>
        </a>

        <a href="https://github.com">
          <img
            src="https://via.placeholder.com/515X700"
            alt="Nome do projeto"
          />
          <h3>Projeto 1</h3>
          <div class="informacoes-projeto">
            <p>Projeto feito usando HTML, CSS e JavaScript</p>
            <p>🔗 Ver no GitHub Pages</p>
          </div>
        </a>

        <a href="https://github.com">
          <img
            src="https://via.placeholder.com/515X700"
            alt="Nome do projeto"
          />
          <h3>Projeto 1</h3>
          <div class="informacoes-projeto">
            <p>Projeto feito usando HTML, CSS e JavaScript</p>
            <p>🔗 Ver no GitHub Pages</p>
          </div>
        </a>
      </Styled.StyledCarousel>
    </Styled.Section>
  );
};
