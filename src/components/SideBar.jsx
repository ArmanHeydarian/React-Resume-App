import React, { Component } from "react";
import SideButton from "./SideButton";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";

class SideBar extends Component {
  state = {
    // The List Items that will be showing on designed sidebar as resume Items
    Tags: ["AboutMe", "Education", "Experinces", "Skills", "Certificates"],
  };

  render() {
    return (
      // Returns The list of top tags as SideBar Component
      <ListGroup>
        {this.state.Tags.map((tag) => (
          <SideButton
            key={tag}
            dataFromParent={tag}
            OnChanging={() => this.props.OnChanging(tag)}
          />
        ))}
      </ListGroup>
    );
  }
}
export default SideBar;
