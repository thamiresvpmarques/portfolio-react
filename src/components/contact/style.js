import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 200px;
  width: 100%;
  color: ${({ theme }) => theme.darkColor};
  font-family: ${({ theme }) => theme.fontFamily};
`;
export const ContactContainer = styled.div`
  text-align: center;
  gap: 30px;
`;
export const LinksSocial = styled.ul`
  gap: 50px;

  svg {
    font-size: 50px;
    margin: 15px;
    color: ${({ theme }) => theme.mediumColor};
    transition: 0.75s;
  }
  svg:hover {
    color: ${({ theme }) => theme.darkColor};
    font-size: 80px;
  }
`;
