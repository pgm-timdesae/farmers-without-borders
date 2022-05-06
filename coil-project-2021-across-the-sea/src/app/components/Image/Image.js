import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 1rem 0;
`;
const StyledImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 600px;
  }
`;

const Image = ({ image, text }) => {
  return (
    <StyledContainer>
      <StyledImg src={"./images/" + image} alt={text} />
    </StyledContainer>
  );
};

export default Image;
