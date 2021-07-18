import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import SideBar from "./components/SideBar";
import MainContent from "./components/mainContent";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class App extends Component {
  state = {
    SelectedItem: "AboutMe",
  };

  handleClick = (ListItemId) => {
    this.setState({
      SelectedItem: ListItemId,
    });

    console.log(this.state.SelectedItem);
  };
  render() {
    const BorderStyle = {
      border: "2px solid rgba(0, 0, 0, 0.2)",
    };
    return (
      <Container style={{ margin: 20 }}>
        <Row className="App">
          <Col md={2}>
            <SideBar OnChanging={this.handleClick}></SideBar>
          </Col>
          <Col md={9} style={BorderStyle}>
            <MainContent ShowContent={this.state.SelectedItem} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
