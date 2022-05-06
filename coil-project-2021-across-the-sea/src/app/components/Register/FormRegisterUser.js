import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../Button/Button';
import InputField from '../Forms/InputField';
import ClipLoader from "react-spinners/ClipLoader";
import { gql, useMutation } from '@apollo/client';
import styled, { css } from 'styled-components';
import theme from '../../contexts/Theme';

const spinner = css`
  display: block;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  display: block;
`;

const FormRegisterUser = () => {

  const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password:  String!) {
    createUser(createUserInput: {email: $email, username: $username, password: $password}){
      id,
      email,
      password,
      profileId
    }
  }
  `;

  const [addUser, { data, loading, error }] = useMutation(ADD_USER);
  if (loading) return <ClipLoader size={50} loading={loading} css={spinner} color={theme.colors.darkGreen}
/>;
  if (error) return <h3>Submission error! {error.message}</h3>;
  if (data) return <h3>Succes! User(id: {data.createUser.id}) created, Login using: {data.createUser.email}</h3>;

  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid Email').max(128).required('Email is required'),
    username: yup.string().max(128).required('Username is required'),
    password: yup.string().required('Password is required'),
  })
  
  return (
      <Formik 
        initialValues={{
          username:'',
          email: '',
          password: ''
        }}
        onSubmit={(values, actions) => {
          if (values.password === values.password2) {
            // actions.setSubmitting(false);
            addUser({variables: { username: values.username, email: values.email, password: values.password }});
          } else {
           return 'Passwords are not the same!';
          }
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <StyledLabel>
            Username
            <InputField name="username" placeholder="Username" />
            </StyledLabel>
            <StyledLabel>
            Email
            <InputField name="email" placeholder="Email" />
            </StyledLabel>
            <StyledLabel>
            Password
            <InputField type="password" name="password" placeholder="New password" />
            </StyledLabel>
            <StyledLabel>
            Re-type password
            <InputField type="password" name="password2" placeholder="Retype password" />
            </StyledLabel>

            <Button 
              type="submit" 
              color="primary"
            >
              Register as User
            </Button>
          </form>
        )}
      </Formik>
  )
}

export default FormRegisterUser