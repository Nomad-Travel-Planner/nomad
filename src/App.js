import React from "react";

import Airbnb from "./Airbnb/Airbnb";

// import Map from "./Map";
// import Airbnb from "./Airbnb";
// import Camping from "./Camping";

import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import GoogleMaps from "./Map/Map";
// import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {

  render() {
    return(
      <>
      <div className="home">
        <Header />
        <div className="home">
          <h1>NOMAD</h1>
          <Footer />
        </div>
      </div>
      <GoogleMaps />
      <Airbnb/>
      {/* NOMAD  */}

      <Footer />
      </>
    )
  }
}

export default (App);
