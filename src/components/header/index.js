import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import imageThamires from '../../images/thamires-marques.png'

import * as Styled from './style'

export const Header = () => {

  const { width } = useWindowSize();

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (width >= 425) {
      setMenu(false);
      return;
    }
  }, [width]);
  return (
    <Styled.Header>
        <a href="index.html">
          <Styled.Logo src={imageThamires} alt="logo"></Styled.Logo>
        </a>
        <nav>
        <input
          type="checkbox"
          name="menu-hamburguer"
          id="menu-hamburguer"
          checked={menu}
          onChange={() => setMenu((prev) => !prev)}
        />

        <label for="menu-hamburguer">
          <div className="menu">
            <span className="hamburguer"></span>
          </div>
        </label>
        <Styled.Menu>
          <li>
            <Styled.NavMenu href='#home'>
               Home
            </Styled.NavMenu>
          </li>
          <li>
            <Styled.NavMenu href="#about">
               Sobre
            </Styled.NavMenu>
          </li>
          <li>
            <Styled.NavMenu href="#abilities">
               Habilidades
            </Styled.NavMenu>
          </li>
          <li>
            <Styled.NavMenu href="#projects">
               Projetos
            </Styled.NavMenu>
          </li>
          <li>
            <Styled.NavMenu href="#contact">
               Contato
            </Styled.NavMenu>
          </li>
        </Styled.Menu>
      </nav>
    </Styled.Header>
  );
};


