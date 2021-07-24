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
    const contentStyle = {
      border: "2px solid rgba(0, 0, 0, 0.2)",
      backgroundColor: "#fff",
      minHeight: "700px",
    };
    return (
      <Container style={{ marginTop: 30 }}>
        <Row className="App">
          <Col md={2}>
            <SideBar OnChanging={this.handleClick}></SideBar>
          </Col>
          <Col md={10} style={contentStyle}>
            <MainContent ShowContent={this.state.SelectedItem} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
