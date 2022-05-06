import React, { useState } from 'react';

const TextField = ({ name, value = "", label, placeholder, onChange, onBlur, error, type = "text" }) => {
  const [ currentValue, setCurrentValue ] = useState(value);

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      label={label}
      value={currentValue}
      onChange= {(e) => {
        if(onChange) onChange(e);
        setCurrentValue(e.currentTarget.value)
      }}
      onBlur={onBlur}
      error={error}
    />
  )
}

export default TextField
