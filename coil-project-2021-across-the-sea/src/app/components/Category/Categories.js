import { Link } from "react-router-dom";
import styled from "styled-components";

import * as Routes from "../../routes";
import CategoryList from "./CategoryList";
import { FlexDiv, Wrapper } from "../../theme/style";

const CategorySection = styled.section`
  margin-top: ${({ theme }) => theme.margins.large};
`;

const Categories = () => {
  return (
    <CategorySection>
      <Wrapper>
        <FlexDiv>
          <h2>Categories</h2>

          <Link to={Routes.PRODUCTS}>See more</Link>
        </FlexDiv>

        <CategoryList />
      </Wrapper>
    </CategorySection>
  );
};

export default Categories;
