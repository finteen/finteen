import React from 'react';

const InputField = ({
  id,
  input,
  label,
  type,
  className,
  meta: { touched, error },
  placeholder,
}) => (
  <React.Fragment>
    <label htmlFor={id} className="label-form">
      {label}
      <input {...input} type={type} id={id} placeholder={placeholder} className={className} />
    </label>
    {
      touched
      && error
      && <div>{error}</div>}
  </React.Fragment>
);


export default InputField;
