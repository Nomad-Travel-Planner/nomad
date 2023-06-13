import React from "react";

import Airbnb from "./Airbnb/Airbnb";

// import Map from "./Map";
// import Airbnb from "./Airbnb";
// import Camping from "./Camping";

import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import GoogleMaps from "./Map/Map";

class App extends React.Component {

  render() {
    return(
      <>
      <Header />

      <div style ={{ backgroundImage:'url(/nomad-background.jpg)' }}>
      NOMAD 
      </div>
      <GoogleMaps />
      <Airbnb/>
      {/* NOMAD  */}

      <Footer />
      </>
    )
  }
}

export default App;
