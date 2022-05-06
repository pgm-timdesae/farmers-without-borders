import { Link } from "react-router-dom";
import styled from "styled-components";

import * as Routes from "../../routes";
import ProductList from "./ProductList";
import { FlexDiv, Wrapper } from "../../theme/style";

const ProductSection = styled.section`
  margin-top: ${({ theme }) => theme.margins.large};
`;

const Products = () => {
  return (
    <ProductSection>
      <Wrapper>
        <FlexDiv>
          <h2>Popular</h2>

          <Link to={Routes.PRODUCTS}>See more</Link>
        </FlexDiv>

        <ProductList featured={true} />
      </Wrapper>
    </ProductSection>
  );
};

export default Products;
