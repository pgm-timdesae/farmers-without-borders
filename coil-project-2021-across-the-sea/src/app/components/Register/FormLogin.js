import { Formik } from 'formik'
// import { useState } from 'react'
import Button from '../Button/Button'
import InputField from '../Forms/InputField'
import * as yup from 'yup';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
`;

const FormLogin = () => {
  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid Email').max(128).required('Email is required'),
    password: yup.string().required('Password is required'),
  })

  const handleLogin = (result, values) => {
    console.log(result);
    if( result.access_token !== undefined) {
      localStorage.setItem('token', result.access_token);
      return window.location.href = '/';
    }
  }

  return (
    <Formik 
    initialValues={{
      email: '',
      password: ''
    }}
    onSubmit={ (values) => {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        "email": values.email,
        "password": values.password
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      // fetch("http://localhost:3000/login", requestOptions)
      fetch("https://farmers-without-borders-server.onrender.com/login", requestOptions)
      .then(response => response.json())
      .then(result => handleLogin(result, values))
      .catch(error => console.log(error))
    }}
    validationSchema={validationSchema}
  >
    {(formik) => (
      <form onSubmit={formik.handleSubmit}>
        <StyledLabel>
          Email
          <InputField name="email" placeholder="Email" />
        </StyledLabel>
        <StyledLabel>
          Password
          <InputField type="password" name="password" placeholder="Password" />
        </StyledLabel>

        <Button 
          type="submit" 
          color="primary"
        >
          Login
        </Button>
      </form>
    )}
  </Formik>
  )
}

export default FormLogin
