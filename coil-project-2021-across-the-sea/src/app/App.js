import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import {
  AboutPage,
  CartPage,
  CheckoutPage,
  CheckoutPageLocation,
  CheckoutPageMethod,
  CheckoutPageOverview,
  ContactPage,
  HomePage,
  ProductsPage,
  ProfilePage,
  ProductPage,
} from "./pages";
import * as Routes from "./routes";
import theme from "./contexts/Theme";
import GlobalStyles from "./theme/global";

//import { Button } from './components/Button';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Redirect from={Routes.HOME} to={Routes.LANDING} />
          <Route exact path={Routes.LANDING}>
            <HomePage cart={cart} setCart={setCart} />
          </Route>
          <Route path={Routes.PRODUCTS}>
            <ProductsPage cart={cart} setCart={setCart} />
          </Route>
          <Route path={Routes.PRODUCT}>
            <ProductPage cart={cart} setCart={setCart} />
          </Route>
          <Route exact path={Routes.PROFILE}>
            <ProfilePage cart={cart} setCart={setCart} />
          </Route>
          <Route exact path={Routes.ABOUT}>
            <AboutPage cart={cart} setCart={setCart} />
          </Route>
          <Route exact path={Routes.CONTACT}>
            <ContactPage cart={cart} setCart={setCart} />
          </Route>
          <Route exact path={Routes.CART}>
            <CartPage cart={cart} setCart={setCart} />
          </Route>
          <Route exact path={Routes.CHECKOUT}>
            <CheckoutPage cart={cart} setCart={setCart} />
          </Route>
          <Route exact path={Routes.CHECKOUTLOCATION}>
            <CheckoutPageLocation cart={cart} setCart={setCart} />
          </Route>
          <Route exact path={Routes.CHECKOUTMETHOD}>
            <CheckoutPageMethod cart={cart} setCart={setCart} />
          </Route>
          <Route exact path={Routes.CHECKOUTOVERVIEW}>
            <CheckoutPageOverview cart={cart} setCart={setCart} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
