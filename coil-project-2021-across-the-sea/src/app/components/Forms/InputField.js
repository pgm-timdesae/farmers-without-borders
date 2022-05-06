import React from 'react'
import styled from 'styled-components';
import { useField } from 'formik'
// import { boolean } from 'yup/lib/locale';

import TextField from './TextField'

const Error = styled.div `
  color: ${({ theme }) => theme.colors.red};
`

const InputField = ({label, ...props}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <>
    <TextField 
      label={label}  
      {...field}
      {...props}
      //error={meta.touched && boolean(meta.error)}
      //helperText={meta.touched && meta.error}
    />
    {errorText &&
      <Error>
        {errorText}
      </Error>}
    </>
  );
}

export default InputField
