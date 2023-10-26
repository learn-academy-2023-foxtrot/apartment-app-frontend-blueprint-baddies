import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';



function Header (args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div className='dropDownMenu'>
      <Navbar {...args}>
        <div>
        <NavbarBrand style={{color:'white'}} href="/">Toon Towers</NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup">
                Sign Up
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signin">
                Sign in       
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/aptindex">
                See Available Apartments
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/aptnew">
                Create New Apartment
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header