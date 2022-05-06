import { Link } from "react-router-dom";
import styled from "styled-components";

import * as Routes from "../../routes";
import PopularProductList from "./PopularProductList";
import { FlexDiv, Wrapper } from "../../theme/style";

const ProductSection = styled.section`
  margin-top: ${({ theme }) => theme.margins.large};
`;

const PopularProducts = () => {
  return (
    <ProductSection>
      <Wrapper>
        <FlexDiv>
          <h2>Popular</h2>

          <Link to={Routes.PRODUCTS}>See more</Link>
        </FlexDiv>

        <PopularProductList />
      </Wrapper>
    </ProductSection>
  );
};

export default PopularProducts;
