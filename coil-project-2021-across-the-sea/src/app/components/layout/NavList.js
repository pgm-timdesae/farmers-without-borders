import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Routes from "../../routes";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const NavList = styled.ul`
  list-style: none;

  @media (min-width: ${({ theme }) => theme.width.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 6rem;
  }
`;

const ListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.margins.medium};
  position: relative;

  a {
    color: ${({ theme }) => theme.colors.darkGreen};
    font-size: ${({ theme }) => theme.fontSizes.large};
    transition: ${({ theme }) => theme.transitions.normal};

    &:hover {
      color: ${({ theme }) => theme.colors.primaryGreen};
    }
  }

  @media (min-width: ${({ theme }) => theme.width.desktop}) {
    margin-bottom: 0;
    margin-right: ${({ theme }) => theme.margins.medium};

    a {
      font-size: ${({ theme }) => theme.fontSizes.medium};
    }
  }
`;

const AmountCart = styled.div `
  background: ${({ theme }) => theme.colors.lightGreen};
  position: absolute;
  top: -1rem;
  left: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

  const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
  // <Link to={Routes.LANDING} />
};

const emptyList = ["undefined", null, ""];

const List = ({ cart }) => {
  return (
  <NavList>
    <ListItem>
      <Link to={Routes.LANDING}>Home</Link>
    </ListItem>
    <ListItem>
      <Link to={Routes.PRODUCTS}>Products</Link>
    </ListItem>
    <ListItem>
      <Link to={Routes.ABOUT}>About</Link>
    </ListItem>
    <ListItem>
      <Link to={Routes.CONTACT}>Contact</Link>
    </ListItem>
    <ListItem>
      {!emptyList.includes(localStorage.getItem('token')) && <Link onClick={logout}>Logout</Link>}
      {emptyList.includes(localStorage.getItem('token')) && <Link to={Routes.PROFILE}>Login</Link>}
    </ListItem>
    <ListItem>
      {!emptyList.includes(localStorage.getItem('token')) && <Link to={Routes.PROFILE}><FiUser/></Link>}
    </ListItem>
    <ListItem>
      <Link to={Routes.CART}>
        <FiShoppingCart/>
        <AmountCart>
          <span>{cart.length}</span>
        </AmountCart>
      </Link>
    </ListItem>
  </NavList>
  )
}

export default List;
