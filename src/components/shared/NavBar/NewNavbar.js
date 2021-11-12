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
import { Button, Typography } from '@mui/material'

const NewNavbar = () => {
  const { user, logout } = useAuth()
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
          {user?.email &&
            <NavLink to='/dashboard' activeStyle>
              Dashboard
            </NavLink>
          }
        </NavMenu>
        
        {user?.email ?
          <NavBtn>
            <Typography sx={{ color: 'white' }}>Welcome, {user.displayName}</Typography>
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