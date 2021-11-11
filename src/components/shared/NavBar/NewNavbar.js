import React from 'react';
import useAuth from '../../../hooks/useAuth';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { Button , Typography} from '@mui/material'

const NewNavbar = () => {
  const { user , logout} = useAuth()
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
          <NavLink to='/register' activeStyle>
            Register
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
        {user?.email ?
          <NavBtn>
            <Typography sx={{color:'white'}}>Welcome, {user.displayName}</Typography>
            <Button onClick={logout} variant="text">Log Out</Button>
          </NavBtn>
          :
          <NavBtn>
            <NavBtnLink to='/login'>Log In</NavBtnLink>
          </NavBtn>
        }

      </Nav>
    </>
  );
};

export default NewNavbar;