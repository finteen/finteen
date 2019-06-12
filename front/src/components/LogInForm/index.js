/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
// import InputField
import InputField from '../InputField/index';

// creation du formulaire:
let LogInForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        id="email"
        type="text"
        name="email"
        component={InputField}
      />
      <Field
        id="password"
        type="password"
        name="password"
        component={InputField}
      />
      <button type="submit">Sign in</button>
    </form>
  );
};

// validation des entrees:
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    /* console.log('email is required'); */
    errors.email = 'email is required';
  } else if (!/^.+@.+$/i.test(values.email)) {
    /* console.log('email is invalid'); */
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    /* console.log('password is required'); */
    errors.password = 'password is required';
  }

  return errors;
};

LogInForm = reduxForm({
  form: 'signIn',
  validate,
})(LogInForm);

export default LogInForm;
