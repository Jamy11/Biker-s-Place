import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const NewNavbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
          Biker's Place
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/explore' activeStyle>
            Explore
          </NavLink>
          <NavLink to='/purchase' activeStyle>
            Purchase
          </NavLink>
          {/* <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default NewNavbar;