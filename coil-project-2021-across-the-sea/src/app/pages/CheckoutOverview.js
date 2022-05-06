import { BaseLayout } from "../layouts";
import Process from "../components/Checkout/Process";
import { Wrapper } from "../theme/style";
//import ProductListItem from "../components/Products/ProductListItem";
import styled from "styled-components";
import { CartItemContainer, CartItemInfo, Img, ProductTitle, ProductFarmer, ProductPrice, CartInput, CartTotal} from "./Cart";
import { Button, ButtonRed } from "../components/Button";
import * as Routes from '../routes';
import { Link } from "react-router-dom";


const OverviewSection = styled.section`
  margin-top: ${({ theme }) => theme.margins.normal};
  margin-bottom: ${({ theme }) => theme.margins.normal};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryGreen};
`;

const CheckoutPageOverview = ({cart, setCart}) => {
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

  const getTotalSum = () => {
    return cart.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0
    );
  };

  return (
    <BaseLayout cart={cart}>
      <Wrapper>
        <h1>Checkout</h1>

        <Process />

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

        <CartTotal>
          <span>Total:</span>
          <span>€ {getTotalSum()}</span>
        </CartTotal>
          

        <OverviewSection>
          <h2>Delivery adress</h2>
          <p>Industrieweg 222 9000 Gent</p>
        </OverviewSection>

        <OverviewSection>
          <h2>Delivery date</h2>
          <p>Next thursday</p>
        </OverviewSection>

        <OverviewSection>
          <h2>Payment method</h2>
          <p>Mastercard</p>
        </OverviewSection>

        <Button>
          <Link to={Routes.HOME}>
            Finish checkout
          </Link>
        </Button>
      </Wrapper>
    </BaseLayout>
  );
};

export default CheckoutPageOverview;
