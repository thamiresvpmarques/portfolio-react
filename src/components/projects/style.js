import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export const Section = styled.section`
  height: 900px;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.darkColor};

  h2 {
    margin-bottom: 30px;
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
    max-width: 350px;
  }
`;
export const DataProjects = styled.div`
h2{
  
}
`