import React from 'react';
import { Formik } from "formik";
import Button from '../Button/Button';
import * as yup from 'yup';
import InputField from '../Forms/InputField';
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';

const validationSchema = yup.object({
    country: yup.string().max(4).required('Country name is required'),
    city: yup.string().max(128).required('City is required'),
    zipcode: yup.string().max(4).required('Zipcode required'),
    street: yup.string().max(128).required('Street name is required'),
    housnr: yup.string().max(4),
    telnr: yup.number(),
})

const FormCheckoutData = () => {
  return (
    <div>
      <Formik
        initialValues={{
          country: "",
          city: ""
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
              <label>Country</label>
              <InputField name="country" placeholder="country" />

              <label>City</label>
              <InputField name="city" placeholder="city" />

              <label>Zip Code</label>
              <InputField name="zipcode" placeholder="zipcode" />

              <label>Street</label>
              <InputField name="street" placeholder="street" />

              <label>House number</label>
              <InputField name="housnr" placeholder="housnr" />

              <label>Phone number</label>
              <InputField name="telnr" placeholder="telnr" />

              <Button disabled={isSubmitting} type="submit">
                <Link to={Routes.CHECKOUTLOCATION}>Continue</Link>
              </Button>
             
              {/* <pre>
                {JSON.stringify(values, null, 2)}
              </pre> */}
            </form>
          )}

      </Formik>
    </div>
  )
}

export default FormCheckoutData

