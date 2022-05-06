import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../contexts/Theme";
import * as Routes from "../../routes";

const StyledItem = styled.li`
  flex-basis: 48%;
  margin-top: ${theme.margins.small};
  background: ${theme.colors.lightGreen};
  padding: 1rem;
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  @media (min-width: 1024px) {
    flex-basis: 30%;
  }
`;

const StyledImg = styled.img`
  width: 100%;

  @media (min-width: 1024px) {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
  }
`;

const ProductLink = styled(Link)`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

const ProductTitle = styled.h3`
  margin-top: ${({ theme }) => theme.margins.small};

  @media (min-width: 1024px) {
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

const ProductFarmer = styled.p`
  margin-top: ${({ theme }) => theme.margins.extraSmall};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

const ProductPrice = styled.p`
  margin-top: ${({ theme }) => theme.margins.extraSmall};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const CenteredText = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1024px) {
    text-align: left;
    flex-basis: 66%;
  }
`;

const PopularProductListItem = () => {
  return (
    <StyledItem>
      <ProductLink to={Routes.PRODUCTS}>
        <ImageContainer>
          <StyledImg
            src="/images/product_placeholder.jpg"
            alt="product placeholder"
          />
        </ImageContainer>

        <CenteredText>
          <ProductTitle>Sweet potatoes (2kg)</ProductTitle>

          <ProductFarmer>Tom's Potato Farm</ProductFarmer>

          <ProductPrice>€ 3</ProductPrice>
        </CenteredText>
      </ProductLink>
    </StyledItem>
  );
};

export default PopularProductListItem;
