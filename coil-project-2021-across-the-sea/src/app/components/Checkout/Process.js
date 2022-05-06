import styled from "styled-components"
import { Link } from "react-router-dom"
import { useLocation } from "react-router";
import * as Routes from '../../routes';

const ProcessList = styled.ul `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: ${({ theme }) => theme.margins.normal};
  margin-bottom: ${({ theme }) => theme.margins.normal};
  transition: ${({ theme }) => theme.transitions.normal};

  li {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-right: ${({ theme }) => theme.margins.medium};
  }

  .active {
    a {
      color: ${({ theme }) => theme.colors.primaryGreen}
    }
  }
`

const Process = () => {
  const location = useLocation();
  const {pathname} = location
  const splitLocation = pathname.split("/");

  return (
    <>
    <ProcessList>
      <li className={splitLocation[2] === "data" ? "active" : ""}>
        <Link to={Routes.CHECKOUT} exact activeClassName="active">Data</Link>
      </li>

      <li className={splitLocation[2] === "location" ? "active" : ""}>
        <Link to={Routes.CHECKOUTLOCATION} exact activeClassName="active">Delivery location</Link>
      </li>

      <li className={splitLocation[2] === "method" ? "active" : ""}>
        <Link to={Routes.CHECKOUTMETHOD} exact activeClassName="active">Payment method</Link>
        </li>

      <li className={splitLocation[2] === "overview" ? "active" : ""}>
        <Link to={Routes.CHECKOUTOVERVIEW} exact activeClassName="active">Overview</Link>
      </li>
    </ProcessList>
    </>
  )
}

export default Process
