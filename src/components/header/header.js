import React from "react";
import {Link} from "react-router-dom"

import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: #e8c593;
`

const ImgLogo = styled.img`
  height: 60px;
`

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 28px;
  margin-right: 20px;
  text-transform: uppercase;
  transition: 0.15s;

  &:hover {
    text-decoration: underline;
  }
`

const Header = () => {
    return (
        <HeaderContainer>
            <Link to={"/"}>
                <ImgLogo src="/logo.png" alt=""/>
            </Link>
            <nav>
                {/*<NavLink href="/">home</NavLink>*/}
                {/*<NavLink href="/">character</NavLink>*/}
                {/*<NavLink href="/">books</NavLink>*/}
                <Link to={"/houses/"}>houses</Link>
                <Link to={"/characters/"}>character</Link>
                <Link to={"/books/"}>books</Link>
            </nav>
        </HeaderContainer>
    )
}

export default Header