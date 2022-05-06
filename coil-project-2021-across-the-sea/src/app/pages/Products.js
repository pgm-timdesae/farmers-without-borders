import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
// import { Link } from 'react-router-dom';

import { BaseLayout } from "../layouts";
import { CategoryList } from "../components/Category/";
import { ProductList } from "../components/Products/";
import { Wrapper } from "../theme/style.js";
// import Basket from '../components/Cart/Basket';
// import * as Routes from '../routes';

const StyledSection = styled.section`
  margin-top: 3rem;
`;

const ProductsPage = ({ cart, setCart }) => {
  /**
   * Search for the url params
   */
  const useQuery = () => {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };

  let query = useQuery();
  const catId = parseInt(query.get("category"));
  const searchQuery = query.get("search");

  /**
   * Render the return
   */
  return (
    <BaseLayout cart={cart}>
      <h1>Products</h1>

      <StyledSection>
        <Wrapper>
          <CategoryList />
        </Wrapper>
      </StyledSection>

      <StyledSection>
        <Wrapper>
          <ProductList
            cart={cart}
            setCart={setCart}
            catId={catId}
            searchQuery={searchQuery}
          />
        </Wrapper>
      </StyledSection>
    </BaseLayout>
  );
};

export default ProductsPage;
