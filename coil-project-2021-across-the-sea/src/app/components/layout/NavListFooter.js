import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Routes from "../../routes";

const NavListFooter = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  margin-bottom: ${({ theme }) => theme.margins.extraSmall};

  a {
    color: ${({ theme }) => theme.colors.darkGreen};
    font-size: ${({ theme }) => theme.fontSizes.normal};
    transition: ${({ theme }) => theme.transitions.normal};

    &:hover {
      color: ${({ theme }) => theme.colors.primaryGreen};
    }
  }
`;

const ListFooter = () => {
  return (
    <NavListFooter>
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
    </NavListFooter>
  );
};

export default ListFooter;
