import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 90px;
  padding: 20px;
  height: 700px;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.darkColor};
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  width: 550px;
  gap: 60px;
  flex-wrap: wrap;
`;
export const Skill = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Icon = styled.i`
  font-size: 60px;
`;
export const Title = styled.h2`
  font-size: 30px;
`;
