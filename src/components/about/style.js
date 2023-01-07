import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 700px;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.mediumColor};
`;
export const Profile = styled.img`
  width: 250px;
  height: 400px;
  border-radius: 15px;
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

  :hover {
    background-color: ${({ theme }) => theme.brightColour};
    transform: scale(1.1);
  }
`;
