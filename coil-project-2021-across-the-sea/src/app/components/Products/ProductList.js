import { useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

import ProductListItem from "./ProductListItem";
import {
  GET_ALL_PRODUCTS,
  GET_SEARCHED_PRODUCTS,
} from "../../graphql/products";
import { GET_CATEGORY_PRODUCTS } from "../../graphql/categories";
import theme from "../../contexts/Theme";

const spinner = css`
  display: block;
  margin: 0 auto;
`;

const StyledList = styled.ul`
  margin-top: ${theme.margins.small};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductList = ({ catId, cart, featured, searchQuery, setCart }) => {
  const id = parseInt(catId);
  console.log(searchQuery);
  // const capitalSearchQuery = searchQuery ? CapitalCase(searchQuery) : null;
  // const { loading, error, data } = useQuery(
  //   !id ? GET_ALL_PRODUCTS : GET_CATEGORY_PRODUCTS,
  //   {
  //     variables: { id },
  //   }
  // );
  const {
    data: dataSearch,
    loading: loadingSearch,
    error: errorSearch,
  } = useQuery(GET_SEARCHED_PRODUCTS, {
    variables: { searchQuery },
    skip: !searchQuery,
  });
  const {
    data: dataCategory,
    loading: loadingCategory,
    error: errorCategory,
  } = useQuery(GET_CATEGORY_PRODUCTS, {
    variables: { id },
    skip: !id && !searchQuery,
  });
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS, {
    skip: id || searchQuery,
  });

  if (loadingSearch | loadingCategory | loading)
    return (
      <ClipLoader
        size={50}
        loading={loading}
        css={spinner}
        color={theme.colors.darkGreen}
      />
    );
  if (errorSearch | errorCategory | error) return `Couldn't load the products!`;

  /* Cart */
  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const productProps = (product) => {
    return (
      <ProductListItem
        key={product.id}
        id={product.id}
        name={product.name}
        description={product.description}
        image={product.image}
        price={product.price}
        farmer={product.farmer}
        product={product}
        addToCart={addToCart}
      />
    );
  };

  console.log(data);
  console.log(dataCategory);
  console.log(dataSearch);

  return (
    <>
      <h3>
        {!featured
          ? searchQuery
            ? `${dataSearch.getSpecificProducts.length} products found with search: "${searchQuery}"`
            : id
            ? `${dataCategory.getCategory.products.length} products found in category ${dataCategory.getCategory.name}`
            : `${data.products.length} products found in all categories.`
          : null}
      </h3>
      <StyledList>
        {featured
          ? data.products.slice(0, 2).map((d) => {
              return productProps(d);
            })
          : searchQuery
          ? dataSearch.getSpecificProducts.map((d) => {
              return productProps(d);
            })
          : id
          ? dataCategory.getCategory.products.map((d) => {
              return productProps(d);
            })
          : data.products.map((d) => {
              return productProps(d);
            })}
      </StyledList>
    </>
  );
};

export default ProductList;
