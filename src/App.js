import React from "react";

import Map from "./Map";
import Airbnb from "./Airbnb/Airbnb";
import Camping from "./Camping";

// import Map from "./Map";
// import Airbnb from "./Airbnb";
// import Camping from "./Camping";

import Header from "./Header";
import Footer from "./Footer";
import "./app.css";

class App extends React.Component {

  render() {
    return(
      <>
      <Header />

      <div style ={{ backgroundImage:'url(/nomad-background.jpg)' }}>
      NOMAD 
      </div>
      <Airbnb/>
      {/* NOMAD  */}

      <Footer />
      </>
    )
  }
}

export default App;
