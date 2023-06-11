import React from "react";
import { Container, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component{
  render(){
    console.log(this.props.auth0);
    return(
      <>
  
      <h1>NOMAD</h1>
      <Container>

      <Navbar className="justify-content-end" fixed="top" collapseOnSelect expand="lg" bg="light" variant="dark">
        <Navbar.Brand></Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/Explore" className="nav-link">Explore</Link></NavItem>
        <NavItem><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
        <Link to="/Login" className='nav-link'>{this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>}</Link>

      </Navbar>
      </Container>
      </>

    )
  }
}

export default withAuth0(Header);