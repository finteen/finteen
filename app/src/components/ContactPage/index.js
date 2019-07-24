import React from 'react';
import './index.css';
import {
  Button, Form, FormGroup, Label, Input, Container,
} from 'reactstrap';
import BurgerMenu from '../BurgerMenu/index';


const ContactPage = () => (

  <Container-fluid>
    <BurgerMenu />
    <Container>
      <h2>Contact us</h2>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </Container>
  </Container-fluid>
);

export default ContactPage;
