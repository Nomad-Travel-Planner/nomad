import React from "react";
import Airbnb from "./Airbnb/Airbnb";
import Camping from "./Camping/Camping";
// import "./explore.css";


class Explore extends React.Component{
  render(){
    return(
      <>      
      <div className="Explore">

      <Camping />
      <Airbnb/>
      </div>
      </>
    )
  }
}

export default Explore;