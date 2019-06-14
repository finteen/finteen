/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  Form, Button, FormGroup, Container, Row, Col, Alert,
} from 'reactstrap';
import InputField from '../InputField/index';


// creation du formulaire:
let LogInForm = (props) => {
  const { onSubmit, erreur } = props;
  return (
    <Container>
      <Row>
        <Col xs={{ size: 8, offset: 2 }}>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Alert color="danger" isOpen={erreur}>Login Failed</Alert>
              <Field
                id="email"
                type="email"
                name="email"
                component={InputField}
                placeholder="Votre e-mail"
                className="form-control"
              />
            </FormGroup>
            <Field
              id="password"
              type="password"
              name="password"
              component={InputField}
              placeholder="Votre mot de passe"
              className="form-control"
            />
            <Button color="primary" size="lg" active type="submit">Sign in</Button>
          </Form>
        </Col>
      </Row>
    </Container>
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
