/* eslint-disable import/no-mutable-exports */
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  Form, Button, FormGroup, Container, Row, Col, Alert,
} from 'reactstrap';
import InputField from '../InputField/index';


// creation du formulaire:
let LogInForm = (props) => {
  const { handleSubmit, erreur } = props;
  return (
    <Container>
      <Row>
        <Col xs={{ size: 8, offset: 2 }}>
          <Form onSubmit={handleSubmit}>
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
    errors.email = 'email is required';
  } else if (!/^.+@.+$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'password is required';
  }

  return errors;
};

LogInForm = reduxForm({
  form: 'LogInForm',
  validate,
})(LogInForm);

export default LogInForm;
