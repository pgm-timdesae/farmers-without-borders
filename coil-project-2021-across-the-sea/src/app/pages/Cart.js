//import Button from "../components/Button/Button";
import * as Routes from '../routes';
import { Link } from "react-router-dom";
//import CartItem from "../components/Cart/CartItem";
import { BaseLayout } from "../layouts";
import { Wrapper } from "../theme/style";
// import { useState } from "react";
// import Basket from "../components/Cart/Basket";
import styled from "styled-components";
import { ButtonRed, Button } from "../components/Button";

export const CartTotal = styled.div `
  border-top: 1px solid ${({ theme }) => theme.colors.primaryGreen};
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.margins.small};
  
  span {
    font-size: ${({ theme }) => theme.fontSizes.normal};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`

export const CartItemContainer = styled.div `
  background: ${({ theme }) => theme.colors.lightGreen};
  height: 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: ${({ theme }) => theme.margins.small};
`;

export const CartItemInfo = styled.div `
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const Img = styled.img `
  width: 8rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`

export const ProductTitle = styled.h3`
  margin-top: ${({ theme }) => theme.margins.small};
  
  @media (min-width: 1024px) {
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`

export const ProductFarmer = styled.p`
  margin-top: ${({ theme }) => theme.margins.extraSmall};
  font-size: ${({ theme }) => theme.fontSizes.small};
`

export const ProductPrice = styled.p`
  margin-top: ${({ theme }) => theme.margins.extraSmall};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const CartInput = styled.input`
  width: 10%;
`

export const ButtonContainer = styled.div `
  display: flex;
  justify-content: space-between;
`

const CartPage = ({cart, setCart}) => {
  // console.log(cart)

  const clearCart = () => {
    setCart([]);
  };

  const getTotalSum = () => {
    return cart.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0
    );
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  }; 

  return (
    <BaseLayout cart={cart}>
      <Wrapper>

        <div>
          {cart.length === 0 && <h2>Your cart is empty</h2>}
          {cart.map((product) => {
            return (
              <CartItemContainer key={product.id}>
                <Img src="/images/product_placeholder.jpg" alt={product.name} />

                <CartItemInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductFarmer>{product.farmer.firstName}</ProductFarmer>
                  <ProductPrice>€ {product.price}</ProductPrice>
                </CartItemInfo>

                <CartInput
                  value={product.quantity}
                  onChange={(e) =>
                    setQuantity(
                      product,
                      parseInt(e.target.value)
                    )
                  }
                />

                <ButtonRed onClick={() => removeFromCart(product)}>
                  Remove
                </ButtonRed>
              </CartItemContainer>
              )
          })}
        </div>

        <CartTotal>
          <span>Total:</span>
          <span>€ {getTotalSum()}</span>
        </CartTotal>

        {cart.length > 0 && (
          <ButtonContainer>
            <ButtonRed onClick={clearCart}>Clear Cart</ButtonRed>
            <Button>
              <Link to={Routes.CHECKOUT}>
                Go to checkout
              </Link>
            </Button>
          </ButtonContainer>
        )}

      </Wrapper>
    </BaseLayout>
  );
};

export default CartPage;
