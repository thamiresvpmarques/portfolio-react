import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pokedex from "../../images/pokedex.png";
import LandingPage from "../../images/landing-page.png";
import GitHubApi from "../../images/githubApi.png";
import Spartacus from "../../images/spartacus.png";

import * as Styled from "./style";

export const Projects = () => {
  return (
    <Styled.Section id="projects">
      <h2>Projetos</h2>
      <Styled.StyledCarousel>
        <a
          target={"_blank"}
          href="https://github.com/thamiresvpmarques/pokemon-cards-react"
          rel="noreferrer"
        >
          <img src={Pokedex} alt="Pokédex" />
          <h3>Pokédex</h3>
          <div>
            <p>
              Projeto feito em React, Context Api, Styled-components e
              React-router-dom
            </p>
          </div>
        </a>

        <a
          target={"_blank"}
          href="https://github.com/thamiresvpmarques/spartacus-upgrade"
          rel="noreferrer"
        >
          <img src={Spartacus} alt="Spartacus" />
          <h3>Spartacus</h3>
          <div>
            <p>Projeto feito em React, Styled-components e React-router-dom</p>
          </div>
        </a>

        <a
          target={"_blank"}
          href="https://github.com/thamiresvpmarques/landing-page-com-grid"
          rel="noreferrer"
        >
          <img src={LandingPage} alt="Landing Page" />
          <h3>Landing Page</h3>
          <div>
            <p>Projeto feito usando HTML, CSS e JavaScript</p>
          </div>
        </a>

        <a target={"_blank"} href="https://github.com/thamiresvpmarques/quest-js-api" rel="noreferrer">
          <img src={GitHubApi} alt="GitHub API" />
          <h3>Search User - GitHub</h3>
          <div>
            <p>Projeto feito usando HTML, CSS e JavaScript</p>
          </div>
        </a>
      </Styled.StyledCarousel>
    </Styled.Section>
  );
};
