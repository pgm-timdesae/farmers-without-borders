import { BaseLayout } from "../layouts";
//import Button from "../components/Button/Button";
import Process from "../components/Checkout/Process";
//import { Link } from "react-router-dom";
import { Wrapper, SmallWrapper } from "../theme/style";
import FormCheckoutData from "../components/Checkout/FormCheckoutData";
import styled from "styled-components";
//import * as Routes from '../routes';

const CheckoutContainer = styled.div`
  input {
    width: 100%;

    @media (min-width: ${({ theme }) => theme.width.desktop}) {
      width: 50%;
    }
  }
`;

const CheckoutPage = ({ cart }) => {
  return (
    <BaseLayout cart={cart}>
      <Wrapper>
        <SmallWrapper>
          <CheckoutContainer>
            <h1>Checkout</h1>

            <Process />

            <FormCheckoutData />
          </CheckoutContainer>
        </SmallWrapper>
      </Wrapper>
    </BaseLayout>
  );
};

export default CheckoutPage;
