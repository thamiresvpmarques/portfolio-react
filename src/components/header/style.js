import styled from "styled-components";

export const Header = styled.header`
  min-width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: ${({ theme }) => theme.standardColor};
  svg {
    display: none;
  }
`;
export const Nav = styled.nav`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily};
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
