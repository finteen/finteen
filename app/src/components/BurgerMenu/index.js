import React from 'react';
import './index.css';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
} from 'reactstrap';
import LogoFinteen from '../../Assets/images/logofinteen.png';


class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false,
    };
  }

  toggleNavbar = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  }

  render() {
    const { collapsed } = this.state;
    return (
      <div>
        <Navbar color="faded" light className="navbar">
          <div className="container">
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <NavbarBrand to="/dashboard" className="logofinteen" tag={RRNavLink}>
              <img src={LogoFinteen} alt="logofinteen" className="logofinteen" />
            </NavbarBrand>
          </div>
          <Collapse isOpen={collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/dashboard/" tag={RRNavLink}>Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/mybudget/" tag={RRNavLink}>My budget</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/mydreams" tag={RRNavLink}>My Dreams</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/myrewards" tag={RRNavLink}>My rewards</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/quizz" tag={RRNavLink}>Take a quizz</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/myprofile" tag={RRNavLink}>Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contactus" tag={RRNavLink}>Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/settings" tag={RRNavLink}>Settings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={RRNavLink}>Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default BurgerMenu;
