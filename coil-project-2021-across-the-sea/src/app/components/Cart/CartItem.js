import React from 'react'
import styled from 'styled-components';

const CartItemContainer = styled.div `
  background: ${({ theme }) => theme.colors.lightGreen};
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: ${({ theme }) => theme.margins.small};
`

const CartItemInfo = styled.div `
  display: flex;
  flex-direction: column;
  align-items: start;
`

const Img = styled.img `
  width: 10rem;
`

const ProductTitle = styled.h3`
  margin-top: ${({ theme }) => theme.margins.small};
  
  @media (min-width: 1024px) {
    margin-top: 0;
  }

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`

const ProductFarmer = styled.p`
  margin-top: ${({ theme }) => theme.margins.extraSmall};
  font-size: ${({ theme }) => theme.fontSizes.small};
`

const ProductPrice = styled.p`
  margin-top: ${({ theme }) => theme.margins.extraSmall};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;

  button {
    border: none;
    padding: 0.5rem;
    background: ${({ theme }) => theme.colors.white};
  }
`

const CartItem = () => {
  return (
    <CartItemContainer>
      <Img src="/images/cat_fruit.jpg" alt="" />

      <CartItemInfo>
        <ProductTitle>Sweet strawberries</ProductTitle>
        <ProductFarmer>Jimbo's</ProductFarmer>
        <ProductPrice>€ 5,30</ProductPrice>
      </CartItemInfo>

      <CartItemQuantity>
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </CartItemQuantity>

    </CartItemContainer>
  )
}

export default CartItem
