import React from "react";
// import Map from "./Map";
// import Airbnb from "./Airbnb/Airbnb";
// import Camping from "./Camping/Camping";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import "./app.css";
import Explore from "./Explore";
// import { Link } from "react-router-dom";
// import LoginButton from "./Login";
// import LogoutButton from "./Logout";
import { withAuth0 } from '@auth0/auth0-react';
import Profile from "./Profile";
import Home from "./Home";


class App extends React.Component {

  render() {
    <Home />
    const {isAuthenticated} = this.props.auth0;
    return(
      <>
      <Router>
        <Header />
      {/* <Link to="/Login" className='nav-link'>{this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>}</Link> */}

      <Routes>
        <Route exact path="/" element={isAuthenticated && < Explore/>}>
        </Route>
        <Route path="/Explore" element={<Explore />}>
        </Route>
       <Route path="/Profile" element={<Profile />}>
        </Route>
      </Routes>
      <Footer />
    </Router>
      {/* <Airbnb/> */}

      {/* {this.state.campsiteArr.length > 0 &&
      <Camping  
        campsiteArr={this.state.campsiteArr}    
      />} */}
      </>
    )
  }
}

export default withAuth0(App);
