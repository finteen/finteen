/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  Form, Button, Container, Row, Col, Alert, Label, FormGroup,
}
  from 'reactstrap';
import SelectField from '../SelectField/index';
import InputField from '../InputField/index';


let SignupForm = (props) => {
  const { handleSubmit, erreur } = props;
  return (
    <Container>
      <h2>Your first connection</h2>
      <Row>
        <Col xs={{ size: 12 }}>
          <Form onSubmit={handleSubmit}>
            <Alert color="danger" isOpen={erreur}>Signup failed</Alert>
            <FormGroup>
              <Field
                id="name"
                type="text"
                name="name"
                component={InputField}
                className="form-control"
                placeholder="First name"
              />
            </FormGroup>
            <Field
              id="lastname"
              type="text"
              name="lastname"
              component={InputField}
              className="form-control"
              placeholder="Last name"
            />
            <Field
              id="email"
              type="email"
              name="email"
              component={InputField}
              className="form-control"
              placeholder="E-mail"
            />
            <Field
              id="mobile"
              type="text"
              name="mobile"
              component={InputField}
              className="form-control"
              placeholder="Mobile"
            />
            <Label for="bic">Date of birth</Label>
            <Field
              id="age"
              type="date"
              name="age"
              component={InputField}
              className="form-control"
              placeholder="age"
            />
            <Label for="gender">Gender</Label>
            <Field
              id="gender"
              type="select"
              name="gender"
              component={SelectField}
              className="form-control"
            >
              <option>Female</option>
              <option>Male</option>
              <option>Neutral</option>
            </Field>
            <Field
              id="pseudonyme"
              type="text"
              name="pseudonyme"
              component={InputField}
              className="form-control"
              placeholder="Pseudo"
            />
            <Field
              id="password"
              type="password"
              name="password"
              component={InputField}
              className="form-control"
              placeholder="Password"
            />
            <Field
              id="checkpassword"
              type="password"
              name="checkpassword"
              component={InputField}
              className="form-control"
              placeholder="Check password"
            />
            <Field
              id="iban"
              type="text"
              name="iban"
              component={InputField}
              className="form-control"
              placeholder="Iban"
            />
            <Field
              id="bic"
              type="text"
              name="bic"
              component={InputField}
              className="form-control"
              placeholder="Bic"
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
  form: 'SignupForm',
  validate,
})(SignupForm);

export default SignupForm;
