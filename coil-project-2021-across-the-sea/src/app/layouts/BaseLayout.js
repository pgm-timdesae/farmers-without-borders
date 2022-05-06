// import styled from 'styled-components';
import { Header, Footer } from "../components/layout";

/* const HorizontalLayout = styled.main `
  max-width: ${({ theme }) => theme.width.desktop};
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;

  @media (min-width: ${props => props.theme.width.tablet}) {
    padding: 0 3rem;
  }
`; */

const BaseLayout = ({ children, cart}) => {

  return (
    <>
      <Header cart={cart}/>

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default BaseLayout;
