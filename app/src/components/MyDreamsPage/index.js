import React from 'react';
import './index.css';
import {
  Card, Button, CardTitle, CardText, Media, ButtonGroup, Progress, UncontrolledCollapse,
} from 'reactstrap';
import BurgerMenu from '../BurgerMenu/index';
import Playstation from '../../Assets/images/sony_ps4.png';
import Garmin from '../../Assets/images/garmin.png';
import Inokim from '../../Assets/images/inokim.png';

const MyDreamsPage = () => (
  <div>
    <BurgerMenu />
    <h2>My dreams</h2>
    <Card body inverse color="warning">
      <CardTitle>Playstation</CardTitle>
      <div>
        <div className="text-center">75%</div>
        <Progress value="75" />
      </div>
      <hr />
      <Button color="info" id="toggler1" style={{ marginBottom: '1rem' }}>Toggle</Button>
      <UncontrolledCollapse toggler="#toggler1">
        <br />
        <Media left href="#">
          <Media width="100" object src={Playstation} alt="Generic placeholder image" />
        </Media>
        <CardText>Console de jeu.</CardText>
        <CardText>Price: 150€</CardText>
        <ButtonGroup>
          <Button>Edit</Button>
          <Button>New transfer</Button>
          <Button>Delete</Button>
        </ButtonGroup>
      </UncontrolledCollapse>
    </Card>
    <br />
    <Card body inverse color="danger">
      <CardTitle>Garmin watch</CardTitle>
      <div>
        <div className="text-center">50%</div>
        <Progress value="50" />
      </div>
      <hr />
      <Button color="info" id="toggler2" style={{ marginBottom: '1rem' }}>Toggle</Button>
      <UncontrolledCollapse toggler="#toggler2">
        <br />
        <Media left href="#">
          <Media width="100" object src={Garmin} alt="Generic placeholder image" />
        </Media>
        <CardText>Montre GPS.</CardText>
        <CardText>Price: 325€</CardText>
        <ButtonGroup>
          <Button>Edit</Button>
          <Button>New transfer</Button>
          <Button>Delete</Button>
        </ButtonGroup>
      </UncontrolledCollapse>
    </Card>
    <br />
    <Card body inverse color="success">
      <CardTitle>Push scooter</CardTitle>
      <div>
        <div className="text-center">You did it !</div>
        <Progress value="100" />
      </div>
      <hr />
      <Button color="info" id="toggler3" style={{ marginBottom: '1rem' }}>Toggle</Button>
      <UncontrolledCollapse toggler="#toggler3">
        <br />
        <Media left href="#">
          <Media width="100" object src={Inokim} alt="Generic placeholder image" />
        </Media>
        <CardText>Inokim.</CardText>
        <CardText>Price: 1725€</CardText>
        <ButtonGroup>
          <Button>Edit</Button>
          <Button>New transfer</Button>
          <Button>Delete</Button>
        </ButtonGroup>
      </UncontrolledCollapse>
    </Card>
  </div>
);


export default MyDreamsPage;
