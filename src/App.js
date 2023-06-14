import React from "react";

import Airbnb from "./Airbnb/Airbnb";

// import Map from "./Map";
// import Airbnb from "./Airbnb";
// import Camping from "./Camping";

import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

// import GoogleMaps from "./Map/Map";
// import GoogleMap from "./Map/GoogleMap";
import Searchbox from "./Map/Searchbox";
import MainMap from "./Map/MainMap";
import MarkerInfoWindow from "./Map/MarkerInfoWindow";
import MarkerInfoWindowGmapsObj from "./Map/MarkerInfoWindowGmapsObj";
// import Marker from "./Map/Marker";
// import AutoComplete from "./Map/AutoComplete";
// import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {

  render() {
    return(
      <>
      <div className="home">
        <Header />
        <Footer />
      </div>
      <Searchbox />
      <MainMap />
      <MarkerInfoWindowGmapsObj />
      <MarkerInfoWindow />
    {/* <GoogleMapReact /> */}
      {/* <GoogleMaps /> */}
      <Airbnb/>
      {/* NOMAD  */}

      <Footer />
      </>
    )
  }
}

export default (App);
