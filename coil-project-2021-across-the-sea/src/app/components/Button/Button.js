/**
 * Button component
 */
import React from "react";
import styled from "styled-components";

const PrimaryBtn = styled.button `
  background: ${({ theme }) => theme.colors.primaryGreen};
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: ${({ theme }) => theme.transitions.normal};
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Lato', serif;
  font-size: ${({ theme }) => theme.fontSizes.small};
  cursor: pointer;

  a {
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Lato', serif;
    font-size: ${({ theme }) => theme.fontSizes.normal};
  }

  :hover{
    background: ${({ theme }) => theme.colors.darkGreen};
  }
`

const Button = ({ type, children, disabled = false, onClick }) => {
  return (
    <PrimaryBtn type={ type } disabled={disabled} onClick={onClick}>
      { children }
    </PrimaryBtn>
    )
};

export default Button;
