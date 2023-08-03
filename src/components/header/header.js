import React from "react";

import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: #e8c593;
`

const ImgLogo = styled.img`
  height: 100%;
`

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 28px;
  margin-right: 20px;
  text-transform: uppercase;
  transition: 0.15s;
  
  &:hover{
    text-decoration: underline;
  }
`

const Header = () => {
    return(
        <HeaderContainer>
            <ImgLogo src="/logo.png" alt=""/>
            <nav>
                <NavLink href="/">home</NavLink>
                <NavLink href="/">character</NavLink>
                <NavLink href="/">books</NavLink>
            </nav>
        </HeaderContainer>
    )
}

export default Header