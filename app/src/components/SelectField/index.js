/* eslint-disable */

import React from 'react';
import'./index.css';
import { Input } from 'reactstrap';

const SelectField = ({
  id,
  input,
  label,
  type,
  className,
  meta: { touched, error },
  children,
}) => (
  <React.Fragment>
    <label htmlFor={id} className="label-form" >
      {label}
      <Input {...input} type={type} id={id} className={className}>
        {children}
      </Input>
    </label>
    {
      touched
      && error
      && <div className="red">{error}</div>}
  </React.Fragment>
);


export default SelectField;
