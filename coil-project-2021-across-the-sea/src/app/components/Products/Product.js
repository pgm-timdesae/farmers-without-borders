import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "../../graphql/products";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

import theme from "../../contexts/Theme";
import ProductItem from "./ProductItem";

const spinner = css`
  display: block;
  margin: 0 auto;
`;

const Product = ({ prodId, cart, setCart }) => {
  const id = parseInt(prodId);

  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  return (
    <>
      {loading && (
        <ClipLoader
          size={50}
          loading={loading}
          css={spinner}
          color={theme.colors.darkGreen}
        />
      )}
      {error && <h3>Submission error for! {error.message}</h3>}
      {data && <ProductItem cart={cart} setCart={setCart} product={data.getProduct} />}
    </>
  );
};

export default Product;
