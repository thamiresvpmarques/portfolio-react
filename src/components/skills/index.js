import * as Styled from "./style";

export const Abilities = () => {
  return (
    <Styled.Section id="abilities">
      <Styled.Title>Habilidades</Styled.Title>

      <Styled.Container>
        <Styled.Skill>
          <Styled.Icon>
            <i className="devicon devicon-html5-plain-wordmark"/>
          </Styled.Icon>
          <span>HTML</span>
        </Styled.Skill>

        <Styled.Skill>
          <Styled.Icon>
            <i className="devicon devicon-css3-plain-wordmark"/>
          </Styled.Icon>
          <span>CSS</span>
        </Styled.Skill>

        <Styled.Skill>
          <Styled.Icon>
            <i className="devicon devicon-github-original"/>
          </Styled.Icon>
          <span>GITHUB</span>
        </Styled.Skill>

        <Styled.Skill>
          <Styled.Icon>
            <i className="devicon devicon-git-plain"/>
          </Styled.Icon>
          <span>GIT</span>
        </Styled.Skill>

        <Styled.Skill>
          <Styled.Icon>
            <i className="devicon devicon-javascript-plain"></i>
          </Styled.Icon>
          <span>JAVASCRIPT</span>
        </Styled.Skill>

        <Styled.Skill>
          <Styled.Icon>
            <i className="devicon-react-original"></i>
          </Styled.Icon>
          <span>REACT</span>
        </Styled.Skill>

        <Styled.Skill>
          <Styled.Icon>
            <i className="devicon-typescript-plain"></i>
          </Styled.Icon>
          <span>TYPESCRIPT</span>
        </Styled.Skill>

        <Styled.Skill>
          <Styled.Icon>
            <i className="devicon-nodejs-plain"></i>
          </Styled.Icon>
          <span>Node.Js</span>
        </Styled.Skill>
      </Styled.Container>
    </Styled.Section>
  );
};
