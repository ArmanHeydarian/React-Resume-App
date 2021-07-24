import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import ReactPlayer from "react-player";

class Education extends Component {
  state = { Tags: ["BACHELOR", "ASSOCIATE"] };

  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="BACHELOR">
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
              <Tab.Pane eventKey="BACHELOR">
                <Container>
                  <Row>
                    <Col md={1} style={{ marginTop: 30 }}>
                      <Image
                        height={100}
                        width={80}
                        src={process.env.PUBLIC_URL + "/Rajaee Logo.png"}
                        thumbnail
                      />
                    </Col>
                    <Col md={10}>
                      <Row
                        className="font-weight-bold"
                        style={{ marginTop: 20, textAlign: "left" }}
                      >
                        <h5>
                          BACHELOR OF SOFTWARE ENGINEERING At Rajaei
                          University,Tehran, Iran
                        </h5>
                        <p>JAN 2012- FEB 2014</p>
                      </Row>

                      <Row className="text-left">
                        <p className="text-start">
                          Main Project: Soccer Video Analysis Project (Final
                          project); A video processing system to analyze the
                          soccer video streams using visual object tracking
                          methods and AI. I have surveyed and improved Kernel
                          Tracking algorithm by Kalman-filter so that I
                          published the new approach as a new article in ACSIJ
                          journal. This project has also won the Zagros
                          innovations event in 2012. The demo video is here.
                        </p>
                        <p className="text-start">
                          Technologies: Visual C++, Direct Show, Visual Object
                          Tracking, Multithreading.
                        </p>
                      </Row>
                      <Row>
                        <h6 className="text-start"> Demo Video : </h6>
                        <ReactPlayer
                          controls="true"
                          url="https://www.youtube.com/watch?v=0IW6pgK24UA"
                        />
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
              <Tab.Pane eventKey="ASSOCIATE">
                <Container>
                  <Row>
                    <Col md={1} style={{ marginTop: 30 }}>
                      <Image
                        height={100}
                        width={80}
                        src={process.env.PUBLIC_URL + "/Sanandaj Logo.png"}
                        thumbnail
                      />
                    </Col>
                    <Col md={10}>
                      <Row
                        className="font-weight-bold"
                        style={{ marginTop: 20, textAlign: "left" }}
                      >
                        <h5>
                          ASSOCIATE OF SOFTWARE DEVELOPING At Technical
                          University of Sanandaj
                        </h5>
                        <p>JAN 2009- AUG 2011</p>
                      </Row>

                      <Row className="text-left">
                        <p className="text-start">
                          Main Project: Sport Simulation Software (Final
                          project); A windows application for animating and
                          simulating tactics in soccer games for training
                          purposes. The result was quite satisfying as far as I
                          won the prize of Kharazmi award by presenting this
                          product. It is worth noting that some of Iranian
                          soccer clubs (e.g. Esteghlal and Kerman) have been
                          using this software in their training courses.
                        </p>
                        <p className="text-start">
                          Technologies: C#, Animation Graphic Techninques,
                          Windows FileSystem.
                        </p>
                      </Row>
                      <Row>
                        <h6 className="text-start"> Demo Video : </h6>
                        <ReactPlayer
                          controls="true"
                          url="https://youtu.be/9f9LMC1Jdhc"
                        />
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>
            </Tab.Content>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default Education;
