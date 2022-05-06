import { BaseLayout } from "../layouts";

// import FormRegisterFarmer from "../components/Register/FormRegisterFarmer";
import FormRegisterUser from "../components/Register/FormRegisterUser";
import FormLogin from "../components/Register/FormLogin";
import FormRegisterProfile from "../components/Register/FormRegisterProfile";
import { Wrapper } from "../theme/style";
import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;

  @media(min-width: ${({theme}) => theme.width.desktop}) {
    flex-direction: row;
  }
`;

const Divider = styled.div`
  margin: ${({theme}) => theme.margins.large};
  height: ${({theme}) => theme.margins.extraSmall};
  width: 5rem;
  max-width: 100%;
  background: ${({theme}) => theme.colors.darkGreen};

@media(min-width: ${({theme}) => theme.width.desktop}) {
  height: 5rem;
  width: ${({theme}) => theme.margins.extraSmall};
}
`;

const ProfilePage = ({ cart }) => {
  const emptyList = ["undefined", null, ""];
  return (
    <BaseLayout cart={cart}>
      <Wrapper>
        <h1>Profile page</h1>

        <FlexDiv>
          {emptyList.includes(localStorage.getItem("token")) && <FormLogin />}
        <Divider />
          {emptyList.includes(localStorage.getItem("token")) && (
            <FormRegisterUser />
          )}
        </FlexDiv>


        {/*!emptyList.includes(localStorage.getItem('token'))  && <FormRegisterFarmer /> */}

        {!emptyList.includes(localStorage.getItem("token")) && (
          <FormRegisterProfile />
        )}
      </Wrapper>
    </BaseLayout>
  );
};

export default ProfilePage;
