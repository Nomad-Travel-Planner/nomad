import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {

  render() {
    return(
      <div className="app">
        <Header />
        <div className="home">
          <h1>NOMAD</h1>
          <Footer />
        </div>
      </div>
    )
  }
}

export default withAuth0(App);
