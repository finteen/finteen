import React from 'react';

const InputField = ({
  id,
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <div>
    <label htmlFor={id}>
      {label}
      <input {...input} type={type} id={id} />
    </label>
    {
      touched
      && error
      && <div>{error}</div>}
  </div>
);


export default InputField;
