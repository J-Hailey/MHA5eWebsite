import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>MHA</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='about'>About</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='books'>Books</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='moreinfo'>More Info</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='extra'>Extra</NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="#">Discord</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
