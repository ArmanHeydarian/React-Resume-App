import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Col from "react-bootstrap/Col";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experiences from "./Experiences";
import Certificates from "./Certificates";
import Skills from "./Skills";

class MainContent extends Component {
  state = {};

  render() {
    switch (this.props.ShowContent) {
      case "AboutMe":
        return <AboutMe />;
      case "Education":
        return <Education />;
      case "Experinces":
        return <Experiences />;
      case "Skills":
        return <Skills />;
      case "Certificates":
        return <Certificates />;
      default:
        return <AboutMe />;
    }
  }
}

export default MainContent;
