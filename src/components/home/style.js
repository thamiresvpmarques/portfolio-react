import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  gap: 150px;
`;
export const Img = styled.img`
  width:250px;
  height:60ppx;
  cursor:pointer;
  animation: profile-animate 8s ease-in-out infinite 0.75s;
}
@keyframes profile-animate{
    0%{
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50%{
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }

    100%{
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
}
  
`;
export const data = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 100;

  h2 {
    color: ${({ theme }) => theme.darkColor};
    margin: 0px;
    font-size: 40px;
  }
  h3 {
    font-size: 25px;
    color: ${({ theme }) => theme.mediumColor};
  }
`;
