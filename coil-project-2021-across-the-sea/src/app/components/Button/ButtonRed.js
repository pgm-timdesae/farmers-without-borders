/**
 * Button component
 */
import React from "react";
import styled from "styled-components";

const RemoveBtn = styled.button `
  background: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.red};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: ${({ theme }) => theme.transitions.normal};
  color: ${({ theme }) => theme.colors.red};
  font-family: 'Lato', serif;
  font-size: ${({ theme }) => theme.fontSizes.small};
  cursor: pointer;

  a {
    color: ${({ theme }) => theme.colors.red};
    font-family: 'Lato', serif;
    font-size: ${({ theme }) => theme.fontSizes.normal};
  }

  :hover{
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.red};
  }
`

const ButtonRed = ({ type, children, disabled = false, onClick }) => {
  return (
    <RemoveBtn type={ type } disabled={disabled} onClick={onClick}>
      { children }
    </RemoveBtn>
    )
};

export default ButtonRed;
