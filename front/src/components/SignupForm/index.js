/* eslint-disable import/no-mutable-exports */
    
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form, Button } from 'reactstrap';
import InputFild from '../InputField/index';


let SignupForm = (props) => {
  const { handleSubmit, erreur } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        id="name"
        type="text"
        name="name"
        component={InputFild}
        placeholder="Votre prénom"
      />
      <Field
        id="lastname"
        type="text"
        name="lastname"
        component={InputFild}
        placeholeder="Votre nom"
      />
      <Field
        id="email"
        type="email"
        name="email"
        component={InputFild}
        placeholder="Votre e-mail"
      />
      <Field
        id="age"
        type="date"
        name="age"
        component={InputFild}
        placeholder="Votre age"
      />
      <Field
        id="sex"
        type="radio"
        name="sex"
        component={InputFild}
      />
      <Field
        id="pseudonyme"
        type="text"
        name="pseudo"
        component={InputFild}
        placeholder="Votre pseudo"
      />
      <Field
        id="password"
        type="password"
        name="password"
        component={InputFild}
        placeholder="Votre password"
      />
      <Field
        id="checkpassword"
        type="password"
        name="checkpassword"
        component={InputFild}
        placeholder="Confirmer votre password"
      />
      <Field
        id="iban"
        type="iban"
        name="iban"
        component={InputFild}
        placeholder="Votre iban"
      />
      <Field
        id="bic"
        type="text"
        name="bic"
        component={InputFild}
        placeholder="Votre bic"
      />
      <Button>Sign Up</Button>
    </Form>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.lenght > 100) {
    errors.name = 'Name too long';
  }
  if (!values.lastname) {
    errors.name = 'lastname is required';
  } else if (values.name.lenght > 100) {
    errors.name = 'lastname too long';
  }
  if (!values.email) {
    errors.email = 'email is required';
  } else if (!/^.+@.+$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'password is required';
  }

  return errors;
};

SignupForm = reduxForm({
  form: '',
  validate,
})(SignupForm);

export default SignupForm;
