import styled from "styled-components";

const CenteredText = styled.div`
  text-align: center;
`;

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.width.desktop};
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;

  @media (min-width: ${(props) => props.theme.width.tablet}) {
    padding: 0 3rem;
  }
`;

const SmallWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.width.tablet}) {
    width: 70%;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { CenteredText, FlexDiv, Wrapper, SmallWrapper };
