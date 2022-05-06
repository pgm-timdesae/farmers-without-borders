// import { useEffect, useRef, useState } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../Button/Button'
import InputField from '../Forms/InputField'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import theme from "../../contexts/Theme";
import { gql, useQuery } from '@apollo/client';
// import { useMutation } from '@apollo/client';

const spinner = css`
  display: block;
  margin: 0 auto;
`;

// const UPDATE_PROFILE = gql`
// mutation UpdateProfile(
//   $id: Int!,
//   $firstName: String!,
//   $lastName: String!,
//   $profilePicture: String!,
//   $birthday: String!,
//   $street: String!,
//   $houseNumber: String!,
//   $zipCode: String!,
//   $country: String!,
//   $telephoneNumber: Float!){
//     updateProfile(
//     updateProfileInput: {
//       id: $id
//       firstName: $firstName
//       lastName: $lastName
//       profilePicture: $profilePicture
//       birthday: $birthday
//       street: $street
//       houseNumber: $houseNumber
//       zipCode: $zipCode
//       country: $country
//       telephoneNumber: $telephoneNumber}){
//     id
//     firstName
//     lastName
//     profilePicture
//     birthday
//     street
//     houseNumber
//     zipCode
//     country
//     telephoneNumber
//   }
// }
// `;

const GET_USER_BY_EMAIL = gql`
query FindUserByEmail($email: String!) {
  findUserByEmail(email: $email) {
    id
    email
    username
    password
    profile {
      id
      firstName
      lastName
      profilePicture
      birthday
      street
      houseNumber
      zipCode
      country
      telephoneNumber
    }
  }
}`



const FormRegisterProfile = () => {
  const { data, loading, error } = useQuery(GET_USER_BY_EMAIL, {variables: {email: "a@a.com"}});

  const validationSchema = yup.object({
    firstname: yup.string().max(128),
    lastname: yup.string().max(128),
    profilepicture: yup.string().max(512),
    birthday: yup.date(),
    street: yup.string().max(128),
    housnr: yup.string().max(4),
    zipcode: yup.string().max(4),
    country: yup.string().max(4),
    telnr: yup.number(),
  })
  
  return (
    <>
      {loading && <ClipLoader
            size={50}
            loading={loading}
            css={spinner}
            color={theme.colors.darkGreen}
          />}
      {error && <h3>Submission error for! {error.message}</h3>}
      {data && <h3>Succes!:<br/> {JSON.stringify(data.findUserByEmail[0])}):</h3>}
      <Formik 
        enableReinitialize
        initialValues={{
          firstName: '',
          lastName: '',
          profilePicture: '',
          birthday: '',
          street: '',
          houseNumber: '',
          zipCode: '',
          country: '',
          telephoneNumber: 0 
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values), null, 2);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <InputField name="firstName" />
            <InputField name="lastName" />
            <InputField name="profilePicture" />
            <InputField type="date" name="birthday" />
            <InputField name="street" />
            <InputField name="houseNumber" />
            <InputField name="zipcode" />
            <InputField name="country" />
            <InputField name="telephoneNumber" />

            <Button 
              type="submit" 
              color="primary"
            >
              Update Profile
            </Button>
          </form>
        )}
      </Formik>
    </>
  )
}

export default FormRegisterProfile