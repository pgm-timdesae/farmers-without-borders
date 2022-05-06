import { BaseLayout } from "../layouts";
import Process from "../components/Checkout/Process";
import { Wrapper } from "../theme/style";
import FormCheckoutLocation from "../components/Checkout/FormCheckoutLocation";

const CheckoutPageLocation = ({ cart }) => {
  return (
    <BaseLayout cart={cart}>
      <Wrapper>
        <h1>Checkout</h1>

        <Process />

        <FormCheckoutLocation />
      </Wrapper>
    </BaseLayout>
  );
};

export default CheckoutPageLocation;
