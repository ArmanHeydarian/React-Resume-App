import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Col from "react-bootstrap/Col";
import AboutMe from "./aboutMe";
import Education from "./education";
import Experience from "./experience";
class MainContent extends Component {
  state = {};

  render() {
    switch (this.props.ShowContent) {
      case "AboutMe":
        return <AboutMe />;
      case "Education":
        return <Education />;
      default:
        return <Experience />;
    }
  }
}

export default MainContent;
