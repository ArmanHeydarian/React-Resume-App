import React, { Component } from "react";
import SideButton from "./SideButton";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import { withRouter } from "react-router-dom";
//import IMG_5284 from "./IMG_5284.jpg";
class AboutMe extends Component {
  state = { Tags: ["Peronal-Info", "interest", "Contact"] };
  render() {
    return (
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
                  <Row margin-top={200}>
                    <Col md={3}>
                      <Image
                        height={200}
                        width={180}
                        src={process.env.PUBLIC_URL + "/IMG_5284.jpg"}
                        thumbnail
                      />
                    </Col>
                  </Row>
                </Container>
                <Col md={3}>
                  Software Developer at Day Insurance Tehran, Iran
                </Col>
                <Col md={8}>
                  Welcome to my profile My name is Arman with over 7 years of
                  hands-on experience in designing, analyzing and producing
                  various software including Web Application and Management
                  Information Systems (MIS). I enjoy being challenged and
                  getting engaged with projects that requires me to work outside
                  of my comfort zone so that I have won 2 prizes from Kharazmi
                  and Zagros innovation award for introducing best practice in
                  software development. It is worth noting that I am so
                  interested in Research and Development.
                </Col>
                >
              </Tab.Pane>
              <Tab.Pane eventKey="interest">Interest fdsafdsafdsafds</Tab.Pane>
              <Tab.Pane eventKey="Contact">Contact gfdshgfdgfdgdsf</Tab.Pane>
            </Tab.Content>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default withRouter(AboutMe);
