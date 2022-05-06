import styled from "styled-components";
import { bool } from "prop-types";
import { NavList } from "../layout";

const StyledMenu = styled.nav`
  position: fixed;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.bg};
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media (min-width: ${({ theme }) => theme.width.mobile}) {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.width.desktop}) {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background: transparent;
    height: 6rem;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    transform: translateX(0);
    padding: 0;
  }
`;

const Menu = ({ open, cart }) => {
  return (
    <StyledMenu open={open}>
      <NavList open={open} cart={cart}></NavList>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
