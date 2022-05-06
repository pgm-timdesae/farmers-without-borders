import React from 'react';
import { Formik } from "formik";
import Button from '../Button/Button';
import * as yup from 'yup';
import InputField from '../Forms/InputField';
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';
import styled from 'styled-components';

export const RadioFlex = styled.div `
  background: ${({ theme }) => theme.colors.lightGreen};
  margin-bottom: ${({ theme }) => theme.margins.normal};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 1rem;
  display: flex;
  align-items: baseline;

  input {
    margin-right: ${({ theme }) => theme.margins.small};
  }
`

const validationSchema = yup.object({
    delivery: yup.bool().oneOf([true], 'You have to choose at least one option'),
    takeaway: yup.bool().oneOf([true], 'You have to choose at least one option'),
})

const FormCheckoutLocation = () => {
  return (
  <Formik
      initialValues={{
        
      }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        console.log(data);
        setSubmitting(false);
      }}

      validationSchema={validationSchema}
    >

        {( {values, isSubmitting, handleBlur, handleSubmit, handleChange}) => (          
          <form onSubmit={handleSubmit}>
            <RadioFlex>
              <InputField type="checkbox" name="delivery" />
              <label>Delivery (every thursday)</label>
            </RadioFlex>

            <RadioFlex>
              <InputField type="checkbox" name="takeaway" />
              <label>Take away at our company</label>
            </RadioFlex>

            <Button disabled={isSubmitting} type="submit">
              <Link to={Routes.CHECKOUTMETHOD}>Continue</Link>
            </Button>
        
          </form>
        )}

    </Formik>
  )
}

export default FormCheckoutLocation
