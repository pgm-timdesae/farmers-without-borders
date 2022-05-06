import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import CategoryListItem from "./CategoryListItem";
import { GET_ALL_CATEGORIES } from "../../graphql/categories";
import theme from "../../contexts/Theme";

const spinner = css`
  display: block;
  margin: 0 auto;
`;

const StyledList = styled.ul`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: no-wrap;
`;

const CategoryList = () => {
  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);
  console.log(data)
  
  if (loading)
    return (
      <ClipLoader
        size={50}
        loading={loading}
        css={spinner}
        color={theme.colors.darkGreen}
      />
    );
  if (error) return `Couldn't load the categories!`;

  return (
    <StyledList>
      {data.categories.map((e) => {
        return (
          <CategoryListItem
            key={e.id}
            id={e.id}
            image={e.image}
            name={e.name}
          />
        );
      })}
    </StyledList>
  );
};

export default CategoryList;
