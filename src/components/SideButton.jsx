import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

// A component for representing sidebar buttons based on React ListGroup component
class SideButton extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <ListGroup.Item
          action
          href={"#" + this.props.dataFromParent}
          key={this.props.dataFromParent}
          onClick={() => this.props.OnChanging(this.props.dataFromParent)}
        >
          {this.props.dataFromParent}
        </ListGroup.Item>
      </React.Fragment>
    );
  }
}

export default SideButton;
