import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 800px;
  gap: 50px;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.darkColor};
  
  h2 {
    font-size: 40px;
    text-align: center;
  }
  a {
    text-decoration: none;
  }

`;
export const StyledCarousel = styled(Carousel)`
  .carousel .control-dots {
    display: none;
  }
  img {
    max-width: 450px;
  }
  p {
    color: ${({ theme }) => theme.mediumColor};
  }
  h3 {
    margin-top: 10px;
    color: ${({ theme }) => theme.darkColor};
  }
`;

