import PopularProductListItem from "./PopularProductListItem";
import styled from "styled-components";

const StyledList = styled.ul`
  margin-top: ${({ theme }) => theme.margins.small};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PopularProductList = () => {
  return (
    <StyledList>
      <PopularProductListItem />

      <PopularProductListItem />
    </StyledList>
  );
};

export default PopularProductList;
