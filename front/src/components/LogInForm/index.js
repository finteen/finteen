/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Alert } from 'reactstrap';
import InputField from '../InputField/index';
// creation du formulaire:
let LogInForm = (props) => {
  const { onSubmit, erreur } = props;
  return (
    <form onSubmit={onSubmit}>
      <Alert color="danger" isOpen={erreur}>Login failed</Alert>
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
    errors.email = 'Email is required';
  } else if (!/^.+@.+$/i.test(values.email)) {
    /* console.log('email is invalid'); */
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    /* console.log('password is required'); */
    errors.password = 'Password is required';
  }

  return errors;
};

LogInForm = reduxForm({
  form: 'signIn',
  validate,
})(LogInForm);

export default LogInForm;
