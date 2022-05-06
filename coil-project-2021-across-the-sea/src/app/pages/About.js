import { BaseLayout } from "../layouts";
import Newsletter from "../components/About/Newsletter";
import { About, FAQ } from "../components/About";
import { Image } from "../components/Image";
import { Wrapper } from "../theme/style";

const AboutPage = ({ cart }) => {
  return (
    <BaseLayout cart={cart}>
      <Wrapper>
        <About />

        <Image image="farmers-about.jpg" text="about us farm" />

        <FAQ />

        <Newsletter />
      </Wrapper>
    </BaseLayout>
  );
};

export default AboutPage;
