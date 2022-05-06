import React from 'react';
import { Formik } from "formik";
import Button from '../Button/Button';
import * as yup from 'yup';
import InputField from '../Forms/InputField';
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';
import { RadioFlex } from './FormCheckoutLocation';


const validationSchema = yup.object({
    mastercard: yup.bool().oneOf([true], 'You have to choose at least one option. '),
    paypal: yup.bool().oneOf([true], 'You have to choose at least one option. '),
    creditcard: yup.bool().oneOf([true], 'You have to choose at least one option. '),
    american: yup.bool().oneOf([true], 'You have to choose at least one option. '),
    visa: yup.bool().oneOf([true], 'You have to choose at least one option. ')
})

const FormCheckoutMethod = () => {
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
              <InputField type="checkbox" name="mastercard" value="true"/>
              <label for="mastercard">Mastercard</label>
            </RadioFlex>

            <RadioFlex>
              <InputField type="checkbox" name="paypal" value="false"/>
              <label for="paypal">PayPal</label>
            </RadioFlex>

            <RadioFlex>
              <InputField type="checkbox" name="creditcard" value="false"/>
              <label for="creditcard">Credit Card</label>
            </RadioFlex>
            
            <RadioFlex>
              <InputField type="checkbox" name="american" value="false"/>
              <label for="american">American express</label>
            </RadioFlex>
            
            <RadioFlex>
              <InputField type="checkbox" name="visa" value="false"/>
              <label for="visa">Visa</label>
            </RadioFlex>

            <Button disabled={isSubmitting} type="submit">
              <Link to={Routes.CHECKOUTOVERVIEW}>Continue</Link>
            </Button>
        
          </form>
        )}

    </Formik>
  )
}

export default FormCheckoutMethod
