import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import { Image } from '/img/nomad-background.jpg';


class Main extends React.Component{

  
  render() {
    return(
      <>
      <Header />
      <div style ={{ backgroundImage:'url(/nomad-background.jpg)' }}>
      NOMAD 
      </div>
      <Footer />
      </>
    )
  }
}


export default Main;