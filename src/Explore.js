import React from "react";
import Airbnb from "./Airbnb/Airbnb";
import Camping from "./Camping";


class Explore extends React.Component{
  render(){
    return(
      <>      
      <Airbnb/>
      <Camping />
      </>
    )
  }
}

export default Explore;