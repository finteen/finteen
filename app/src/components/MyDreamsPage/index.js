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
        <CardTitle>Casque JVC</CardTitle>
        <div>
          <div className="text-center">75%</div>
          <Progress value="75" />
        </div>
        <Button className="toggle" color="info" id="toggler1">Toggle</Button>
        <UncontrolledCollapse toggler="#toggler1">
          <br />
          <div>
            <img width="100" src={Casque} alt="blabla" />
          </div>
          <CardText>Casque audio.</CardText>
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
        <CardTitle>Concert</CardTitle>
        <div>
          <div className="text-center">50%</div>
          <Progress value="50" />
        </div>
        <Button className="toggle" color="info" id="toggler2">Toggle</Button>
        <UncontrolledCollapse toggler="#toggler2">
          <div>
            <img width="100" src={Concert} alt="blublu" />
          </div>
          <CardText>Concert Guns N Roses.</CardText>
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
        <CardTitle>Vacances</CardTitle>
        <div>
          <div className="text-center">You did it !</div>
          <Progress value="100" />
        </div>
        <Button className="toggle" color="info" id="toggler3">Toggle</Button>
        <UncontrolledCollapse toggler="#toggler3">
          <div>
            <Media width="100" object src={Vacances} alt="bloblbo" />
          </div>
          <CardText>Vacances.</CardText>
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
