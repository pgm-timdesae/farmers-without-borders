import { BaseLayout } from "../layouts";
import Process from "../components/Checkout/Process";
import { Wrapper } from "../theme/style";
import FormCheckoutMethod from "../components/Checkout/FormCheckoutMethod";

const CheckoutPageMethod = ({ cart }) => {
  return (
    <BaseLayout cart={cart}>
      <Wrapper>
        <h1>Checkout</h1>

        <Process />

        <FormCheckoutMethod />
      </Wrapper>
    </BaseLayout>
  );
};

export default CheckoutPageMethod;
