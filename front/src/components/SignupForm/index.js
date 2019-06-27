/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  Form, Button, Container, Row, Col, Alert, Label, FormGroup,
}
  from 'reactstrap';
import InputField from '../InputField/index';


let SignupForm = (props) => {
  const { handleSubmit, erreur } = props;
  return (
    <Container>
      <Row>
        <Col xs={{ size: 6, offset: 2 }}>
          <Form onSubmit={handleSubmit}>
            <Alert color="danger" isOpen={erreur}>Signup failed</Alert>
            <FormGroup>
              <Label for="name">Prénom</Label>
              <Field
                id="name"
                type="text"
                name="name"
                component={InputField}
                placeholder="Votre prénom"
              />
            </FormGroup>
            <Label for="lastname">Nom</Label>
            <Field
              id="lastname"
              type="text"
              name="lastname"
              component={InputField}
              placeholder="Votre nom"
            />
            <Label for="exampleEmail">Email</Label>
            <Field
              id="email"
              type="email"
              name="email"
              component={InputField}
              placeholder="Votre e-mail"
            />
            <Label for="mobile">Mobile</Label>
            <Field
              id="mobile"
              type="text"
              name="mobile"
              component={InputField}
              placeholder="Votre mobile"
            />
            <Label for="age">Age</Label>
            <Field
              id="age"
              type="date"
              name="age"
              component={InputField}
              placeholder="Votre age"
            />
            <Label for="genre">Genre</Label>
            <Field
              id="gender"
              type="text"
              name="gender"
              component={InputField}
              placeholder="Votre genre"
            />
            <Label for="pseudonyme">Pseudonyme</Label>
            <Field
              id="pseudonym"
              type="text"
              name="pseudonym"
              component={InputField}
              placeholder="Votre pseudo"
            />
            <Label for="password">Mot de passe</Label>
            <Field
              id="password"
              type="password"
              name="password"
              component={InputField}
              placeholder="Votre password"
            />
            <Label for="checkemail">Vérification du mot de passe</Label>
            <Field
              id="checkpassword"
              type="password"
              name="checkpassword"
              component={InputField}
              placeholder="Confirmer votre password"
            />
            <Label for="iban">Iban</Label>
            <Field
              id="iban"
              type="text"
              name="iban"
              component={InputField}
              placeholder="Votre iban"
            />
            <Label for="bic">Bic</Label>
            <Field
              id="bic"
              type="text"
              name="bic"
              component={InputField}
              placeholder="Votre bic"
            />
            <Button>Sign Up</Button>
          </Form>
        </Col>
      </Row>
    </Container>
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
    errors.lastname = 'lastname is required';
  } else if (values.lastname.length > 100) {
    errors.lastname = 'lastname too long';
  }
  if (!values.age) {
    errors.age = 'age is required';
  }
  if (!values.gender) {
    errors.gender = 'gender is required';
  }
  if (!values.pseudonym) {
    errors.pseudonym = 'pseudonym is requiered';
  } else if (values.pseudonym.length > 100) {
    errors.pseudonym = 'pseudonym is too long';
  }
  if (!values.checkpassword) {
    errors.checkpassword = 'check password is required';
  } else if (values.checkpassword !== values.password) {
    errors.checkpassword = 'unvalid check password';
  }
  if (!values.iban) {
    errors.iban = 'iban is required';
  } else if (!values.iban.match(/^[a-z0-9]+$/i)) {
    errors.iban = 'Invalid iban';
  }
  if (!values.bic) {
    errors.bic = 'bic is required';
  } else if (values.bic.length > 8) {
    errors.bic = 'Invalid bic';
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
  form: 'signup',
  validate,
})(SignupForm);

export default SignupForm;
