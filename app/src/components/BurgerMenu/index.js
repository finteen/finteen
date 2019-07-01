import React from 'react';
import './index.css';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
} from 'reactstrap';

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
        <Navbar color="faded" light className="navbarcolor">
          <NavbarBrand href="/dashboard" className="mr-auto">Dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/mybudget/">My budget</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/mydreams">My Dreams</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="myrewards">My rewards</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile">Profiles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/settings">Settings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Logout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contactus">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default BurgerMenu;
