import React from 'react';
import './index.css';
import {
  Card, Button, CardTitle, CardText, Media, ButtonGroup, Progress, UncontrolledCollapse, Container,
} from 'reactstrap';
import BurgerMenu from '../BurgerMenu/index';
import Casque from '../../Assets/images/dreams2.jpg';
import Concert from '../../Assets/images/dreams3.jpg';
import Vacances from '../../Assets/images/dreams1.jpg';

const MyDreamsPage = () => (
  <div>
    <BurgerMenu />
    <h2>My dreams</h2>
    <Container>
      <Card body className="card1">
        <CardTitle>Headphones</CardTitle>
        <div>
          <div className="text-center">75%</div>
          <Progress value="75" />
        </div>
        <Button className="toggle" color="info" id="toggler1">Toggle</Button>
        <UncontrolledCollapse toggler="#toggler1">
          <br />
          <div>
            <img className="headphones" width="100" src={Casque} alt="blabla" />
          </div>
          <CardText>Price: 150€</CardText>
          <ButtonGroup>
            <Button>Edit</Button>
            <Button>New transfer</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </UncontrolledCollapse>
      </Card>
    </Container>
    <Container>
      <Card body className="card2">
        <CardTitle>Live Show</CardTitle>
        <div>
          <div className="text-center">50%</div>
          <Progress value="50" />
        </div>
        <Button className="toggle" color="info" id="toggler2">Toggle</Button>
        <UncontrolledCollapse toggler="#toggler2">
          <div>
            <img className="live-show" width="100" src={Concert} alt="blublu" />
          </div>
          <CardText>Price: 65€</CardText>
          <ButtonGroup>
            <Button>Edit</Button>
            <Button>New transfer</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </UncontrolledCollapse>
      </Card>
    </Container>
    <Container>
      <Card body className="card3">
        <CardTitle>Travels</CardTitle>
        <div>
          <div className="text-center">You did it !</div>
          <Progress value="100" />
        </div>
        <Button className="toggle" color="info" id="toggler3">Toggle</Button>
        <UncontrolledCollapse toggler="#toggler3">
          <div>
            <Media className="travels" width="100" object src={Vacances} alt="bloblbo" />
          </div>
          <CardText>Price: 1725€</CardText>
          <ButtonGroup>
            <Button>Edit</Button>
            <Button>New transfer</Button>
            <Button>Delete</Button>
          </ButtonGroup>
        </UncontrolledCollapse>
      </Card>
    </Container>
  </div>
);
export default MyDreamsPage;
