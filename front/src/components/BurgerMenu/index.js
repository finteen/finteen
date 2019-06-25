import React, { Component } from 'react';
import './index.css';
import {
  MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
  MDBCollapse, MDBContainer,
}
  from 'mdbreact';

class BurgerMenu extends Component {
state = {
  collapseID: '',
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
}


render() {
  const newcollapse = this.state;
  return (
    <MDBContainer>
      <MDBNavbar className="navbar" style={{ marginTop: '20px' }} light>
        <MDBContainer>
          <MDBNavbarBrand>
            Finteen
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
          <MDBCollapse id="navbarCollapse1" isOpen={newcollapse.collapseID} navbar>
            <NavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="#!">Dashboard</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">My budget</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">My dreams</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">My rewards</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Profile</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Settings</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/loginform/">Logout</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Contact us</MDBNavLink>
              </MDBNavItem>
            </NavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </MDBContainer>
  );
}
}

export default BurgerMenu;
