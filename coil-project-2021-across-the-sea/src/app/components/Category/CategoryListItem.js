import styled from "styled-components";
import { Link } from "react-router-dom";

import * as Routes from "../../routes";

const StyledItem = styled.li`
  width: 100%
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  padding-top: 100%;
  position: relative;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

const StyledH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.extraSmall};
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.normal};
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

const CategoryListItem = ({ id, image, name, width }) => {
  return (
    <StyledItem>
      <StyledLink
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(/images/categories/${image}`,
          backgroundSize: "cover",
        }}
        to={`${Routes.PRODUCTS}?category=${id ? id : ""}`}
      >
        <StyledH3>{name}</StyledH3>
      </StyledLink>
    </StyledItem>
  );
};

export default CategoryListItem;
