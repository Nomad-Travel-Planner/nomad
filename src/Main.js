import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
// import { Image } from '/img/nomad-background.jpg';


class App extends React.Component{

  
  render() {
    return(
      <>
      <Header />
      <Main />
      <div style ={{ backgroundImage:'url(/nomad-background.jpg)' }}>
      NOMAD 
    </div>
      <Footer />
      </>
    )
  }
}


export default App;