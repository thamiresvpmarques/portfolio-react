import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 700px;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.mediumColor};

  @media (max-width: 900px) {
    flex-direction: column;
    height: 650px;
  }
`;
export const Profile = styled.img`
  width: 250px;
  height: 400px;
  border-radius: 15px;

  @media (max-width: 900px) {
    display: none;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const AboutText = styled.p`
  width: 500px;
  color: ${({ theme }) => theme.mediumColor};
  margin-bottom: 30px;

  @media (max-width: 900px) {
    width: 60%;
    text-align: center;
  }
`;
export const Title = styled.h2`
  margin-bottom: 50px;
  font-size: 30px;
`;
export const CV = styled.a`
  align-items: center;
  background-color: ${({ theme }) => theme.darkColor};
  padding: 10px;
  width: 200px;
  text-align: center;
  color: ${({ theme }) => theme.standardColor};
  border-radius: 50px;
  cursor: pointer;
  transition: 0.75s;
  text-decoration: none;

  :hover {
    background-color: ${({ theme }) => theme.brightColour};
    transform: scale(1.1);
  }

  @media (max-width: 900px) {
    margin-bottom: 100px;
  }
`;
