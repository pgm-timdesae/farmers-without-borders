import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import Button from '../Button/Button'
import InputField from '../Forms/InputField'

const FormRegisterFarmer = () => {

  const validationSchema = yup.object({
    firstname: yup.string().required('firstname is required').max(128),
    lastname: yup.string().required('lastname is required').max(128),
    bio: yup.string().required('bio is required').max(1024),
    logo: yup.string().required('logo is required').max(128),
    website: yup.string().required('website is required').max(128),
  })
  return (
      <Formik 
        initialValues={{
          firstname: '',
          lastname: ''
        }}
        onSubmit={(values) => {
            alert(values, null, 2);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <InputField name="firstname" placeholder="firstname" />
            <InputField name="lastname" placeholder="lastname" />
            <textarea name="bio" placeholder="Your bio ..."></textarea>
            <InputField name="logo" placeholder="www.logo.com/logo.jpg" />
            <InputField name="website" placeholder="www.website.com" />

            <Button 
              type="submit" 
              color="primary"
            >
              Register as farmer
            </Button>
          </form>
        )}
      </Formik>
  )
}

export default FormRegisterFarmer