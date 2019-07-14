/* eslint-disable react/button-has-type */
import React from 'react';
import {
  Progress, NavLink,
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';
import './index.css';
import BurgerMenu from '../BurgerMenu/index';
import Trip from '../../Assets/images/dreams1.jpg';
import Festival from '../../Assets/images/dreams3.jpg';
import Headphones from '../../Assets/images/dreams2.jpg';
import Delete from '../../Assets/images/logocorbeille.ico';

const MyDreamsPage = () => (

  <div>
    <BurgerMenu />
    <h1 className="title">
      <span className="yellow">M</span>
      <span className="blue">Y</span>
      <span className="pink" />
      <span className="yellow">D</span>
      <span className="blue">R</span>
      <span className="pink">E</span>
      <span className="green">A</span>
      <span className="green">M</span>
      <span className="yellow">S</span>
    </h1>
    <Container>
      <Row>
        <Col xs={{ size: 0, offset: 10 }}>
          <Button size="lg" color="secondary" to="/mydreams/" tag={NavLink}>+</Button>
        </Col>
      </Row>
    </Container>
    <Card width="90%">
      <CardImg width="20%" src={Trip} alt="trip" />
      <CardBody>
        <CardTitle>Trip</CardTitle>
        <CardText>299€</CardText>
        <button className="edit">Edit</button>
        <NavLink className="delete">
          <img className="delete" src={Delete} alt="delete" />
        </NavLink>
      </CardBody>
    </Card>
    <div className="progress">92%</div>
    <Progress value="92" />
    <Card>
      <CardImg top width="20%" src={Headphones} alt="Card image cap" />
      <CardBody>
        <CardTitle>Headphones</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>38€</CardText>
        <button className="edit">Edit</button>
        <button src={Delete}>Delete</button>
      </CardBody>
    </Card>
    <div className="progress">10%</div>
    <Progress value="10" />
    <Card>
      <CardImg top width="20%" src={Festival} alt="Card image cap" />
      <CardBody>
        <CardTitle>Festival</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>109€</CardText>
        <button className="edit">Edit</button>
        <Button src={Delete}>Delete</Button>
      </CardBody>
    </Card>
    <div className="progress">48%</div>
    <Progress value="48" />
    <button className="myfriendsdreams">
      <span className="yellow">M</span>
      <span className="blue">Y</span>
      <span className="pink" />
      <span className="green">F</span>
      <span className="yellow">R</span>
      <span className="blue">I</span>
      <span className="pink">E</span>
      <span className="green">N</span>
      <span className="blue">D</span>
      <span className="green">S</span>
      <span className="pink" />
      <span className="yellow">D</span>
      <span className="blue">R</span>
      <span className="pink">E</span>
      <span className="green">A</span>
      <span className="green">M</span>
      <span className="yellow">S</span>
    </button>
  </div>

);


export default MyDreamsPage;
