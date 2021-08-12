import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import { PersonalData } from "../data/PersonalData";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

/* This Component will show the content of personal Information which has been storing in PersonalData.js
   For Changing the information you need just to change the content of the PersonalData.js */
class AboutMe extends Component {
  // Name of tabs and their container in AboutMe component
  state = { Tags: ["Peronal-Info", "Contact"] };

  styles = {
    bold: { fontWeight: "bold" },
    italic: { fontStyle: "italic" },
  };

  render() {
    return (
      // A container containing 3 tab.
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="Peronal-Info">
          <Row>
            <Nav variant="tabs">
              {this.state.Tags.map((tag) => (
                <Col md={2}>
                  <Nav.Item>
                    <Nav.Link eventKey={tag} key={tag}>
                      {tag}
                    </Nav.Link>
                  </Nav.Item>
                </Col>
              ))}
            </Nav>
          </Row>
          <Row>
            <Tab.Content>
              <Tab.Pane eventKey="Peronal-Info">
                <Container>
                  <Row
                    style={{
                      position: "relative",
                      marginTop: "10px",
                      padding: "20px",
                    }}
                  >
                    <Col md={3}>
                      <Image
                        height={200}
                        width={180}
                        src={process.env.PUBLIC_URL + "/IMG_5284.jpg"}
                        thumbnail
                      />
                    </Col>
                    <Col md={8}>
                      <Row
                        className="font-weight-bold"
                        style={{ marginTop: 20, textAlign: "left" }}
                      >
                        <h3>{PersonalData.Name}</h3>
                      </Row>
                      <Row style={{ marginTop: 50, textAlign: "left" }}>
                        <h6>{PersonalData.Title}</h6>
                      </Row>
                      <Row style={{ marginTop: 20, textAlign: "left" }}>
                        <h6> {PersonalData.Profession}</h6>
                      </Row>
                    </Col>
                  </Row>
                </Container>
                <Row
                  className="text-left"
                  style={{ borderTop: "solid 1px #cac7c7" }}
                >
                  <p
                    style={{
                      padding: "20px 50px 0px 20px",
                      textAlign: "justify",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {PersonalData.AboutMe}
                  </p>
                </Row>
                <Row>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Hobbies</th>
                        <th>Sports</th>
                        <th>Interests</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{PersonalData.Hobbies[0]}</td>
                        <td>{PersonalData.Sport[0]}</td>
                        <td>{PersonalData.Interests[0]}</td>
                      </tr>
                      <tr>
                        <td>{PersonalData.Hobbies[1]}</td>
                        <td>{PersonalData.Sport[1]}</td>
                        <td>{PersonalData.Interests[1]}</td>
                      </tr>
                      <tr>
                        <td>{PersonalData.Hobbies[2]}</td>
                        <td>{PersonalData.Sport[2]}</td>
                        <td>{PersonalData.Interests[2]}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="Contact">
                <Table striped bordered hover style={{ marginTop: 50 }}>
                  <tbody>
                    <tr>
                      <td style={this.styles.bold}>Email</td>
                      <td>{PersonalData.Email}</td>
                    </tr>
                    <tr>
                      <td style={this.styles.bold}>Phone Number</td>
                      <td>{PersonalData.PhoneNumber}</td>
                    </tr>
                    <tr>
                      <td style={this.styles.bold}>LinkedIn</td>
                      <td>
                        <a href={PersonalData.LinkedInUrl}>LinkedIn Profile</a>
                      </td>
                    </tr>

                    <tr>
                      <td style={this.styles.bold}>Website</td>
                      <td>
                        <a href={PersonalData.Website}>Personal Website</a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
            </Tab.Content>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default AboutMe;
