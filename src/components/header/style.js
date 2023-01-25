import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  transition: 0.5s;
  background: ${({theme}) =>theme.standardColor};
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  
  nav ul {
    display: flex;
  }

  input {
    display: none;
  }

  .menu {
    display: none;
    width: 65px;
    height: 60px;
  }

  .hamburguer {
    background-color:${({theme}) => theme.mediumColor} ;
    position: relative;
    display: block;
    width: 30px;
    height: 2px;
    top: 40px;
    left: 15px;
    transition: 0.5s ease-in-out;
  }

  .hamburguer::before,
  .hamburguer::after {
    background-color:${({theme}) => theme.mediumColor} ;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    content: " ";
    transition: 0.2s ease-in-out;
  }

  .hamburguer::before {
    top: -9px;
  }

  .hamburguer::after {
    bottom: -9px;
  }

  input:checked ~ label .hamburguer {
    transform: rotate(45deg);
  }

  input:checked ~ label .hamburguer::before {
    transform: rotate(90deg);
    top: 0;
  }

  input:checked ~ label .hamburguer::after {
    transform: rotate(90deg);
    bottom: 0;
  }

  @media (max-width: 900px) {
    .menu {
      display: block;
      
    }
    nav ul {
      display: none;
    }

    input:checked ~ ul {
      display: flex;
      height: 100vh;
      width: 60vw;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: 0px;
    }

    nav {
      background-color: ${({theme}) => theme.standardColor};
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
    }

    ul {
      box-shadow: -3px 7px 5px 1px rgba(0, 0, 0, 0.034);
      background: ${({theme}) => theme.standardColor};
    }

    ul li {
      display: block;
      text-align: center;
      width: 200px;
      padding: 20px;
    }

    ul li a {
      font-size: 25px;
    }

    .links a {
      margin-left: 0px;
    }

    label {
      display: flex;
      flex-direction: column;
    }

    label div {
      align-self: flex-end;
    }

    svg{
      display: block;
    }
  }
`;

export const Logo = styled.img`
  margin-top: 10px;
  width: 60px;
`;
export const Menu = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;
`;
export const NavMenu = styled.a`
  text-decoration: none;
  gap: 10px;
  color: ${({ theme }) => theme.darkColor};
  transition: 0.75s;
  padding: 7px;
  text-align: center;
  font-size: 17px;

  :hover {
    margin: 10px;
    color: ${({ theme }) => theme.brightColour};
  }
`;
