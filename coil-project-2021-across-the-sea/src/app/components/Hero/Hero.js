import { Link } from "react-router-dom";
import styled from "styled-components";

import * as Routes from "../../routes";
import { CenteredText, Wrapper } from "../../theme/style";
import { Button } from "../Button";

const HeroSection = styled.section`
  background-image: url(/images/hero_background.jpg);
  color: #fff;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;

  @media (min-width: 768x) {
    height: 500px;
  }
`;

const HeroText = styled.p`
  max-width: 50rem;
  margin: 1rem auto;
`;
const Hero = () => {
  return (
    <HeroSection>
      <Overlay>
        <Wrapper>
          <h1>Welcome to Farmers without Borders</h1>

          <CenteredText>
            <HeroText>
              Your local online farmer’s market. Choose from our wide variety
              of, fresh, healthy food delivered right to your doorstep. All
              products come from local farmers and producers in your area.
            </HeroText>

            <Button>
              <Link to={Routes.PRODUCTS}>Check out the products</Link>
            </Button>
          </CenteredText>
        </Wrapper>
      </Overlay>
    </HeroSection>
  );
};

export default Hero;
