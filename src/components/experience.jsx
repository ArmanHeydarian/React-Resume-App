import React, { Component, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import ReactPlayer from "react-player";

class Experience extends Component {
  state = {
    Tags: [
      "Day Insurance Inc",
      "Kankash Inc",
      "Farzanegan Inc",
      "Personal Projects",
    ],
  };

  render() {
    return (
      <Container>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="Day Insurance Inc"
        >
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
              <Tab.Pane eventKey="Day Insurance Inc">
                <Container>
                  <Row>
                    <Col md={1} style={{ marginTop: 30 }}>
                      <Image
                        height={150}
                        width={130}
                        src={process.env.PUBLIC_URL + "/Day Inc Logo.jpg"}
                        thumbnail
                      />
                    </Col>
                    <Col md={10}>
                      <Row
                        className="font-weight-bold"
                        style={{ marginTop: 20, textAlign: "left" }}
                      >
                        <h5>Software Developer at Day Insurance Inc</h5>
                        <p>AUG 2018- PRESENT</p>
                      </Row>

                      <Row className="text-left">
                        <p className="text-start">
                          Datahub project: An enterprise system in order to
                          integrate the business data from multiple applications
                          and connect to third party API like banks and Issuance
                          systems. I have been developing over 60 web-API (REST
                          and SOAP) behind an API Gateway, plus a workflow agent
                          for implementing the data processing flows like ETL.
                        </p>
                        <p className="text-start">
                          Technologies: .Net Framework, EF, WCF, Win Service,
                          Microservice and MS-SQL.
                        </p>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>

              <Tab.Pane eventKey="Kankash Inc">
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
                        <h5>Full Stack Developer at KESHO Startup</h5>
                        <p>May 2016 - JAN 2018</p>
                      </Row>

                      <Row className="text-left">
                        <p className="text-start">
                          Household chores application: I worked as system
                          analyst and Java developer in the startup team. I was
                          responsible for UML designing, data modeling,
                          developing Web-Site and Web-API. The result was
                          satisfying.
                        </p>
                        <p className="text-start">
                          Technologies and tools: Java, Spring, Hibernate ORM,
                          Thymeleaf, Bootstrap
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

              <Tab.Pane eventKey="Farzanegan Inc">
                <Container>
                  <Row>
                    <Col md={1} style={{ marginTop: 30 }}>
                      <Image
                        height={150}
                        width={130}
                        src={process.env.PUBLIC_URL + "/Day Inc Logo.jpg"}
                        thumbnail
                      />
                    </Col>
                    <Col md={10}>
                      <Row
                        className="font-weight-bold"
                        style={{ marginTop: 20, textAlign: "left" }}
                      >
                        <h5>
                          Web Application Developer at Rayan Farzanegan Inc{" "}
                        </h5>
                        <p>APR 2012 - FEB 2014</p>
                      </Row>

                      <Row className="text-left">
                        <p className="text-start">
                          Transportation Management System: The main product was
                          a web-application for managing drivers and taxis by
                          transportation office. My major activities consisted
                          designing and developing application as a web
                          developer in development team.
                        </p>
                        <p className="text-start">
                          Technologies: Asp.NET, Ms-Sql Server, Entity Framework
                          and DevExpress.
                        </p>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Tab.Pane>

              <Tab.Pane eventKey="Personal Projects">
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
                        <h5>Full Stack Developer at Namayan Project</h5>
                        <p>May 2018 - Present</p>
                      </Row>

                      <Row className="text-left">
                        <p className="text-start">
                          Namayan (Dashboard Generator): A web application for
                          making business reports in a fast and very easy way.
                          This is a personal project which has been made by
                          myself and used as a data visualization software at
                          Day Co. it has been qualified as a technical software
                          by Information and Technology Office (ITO) in Iran and
                          could be presented to future market. It is
                          demonstrated on this YouTube link.
                        </p>
                        <p className="text-start">
                          Technologies and tools: Asp.net MVC, Highcharts.js and
                          DevExtreme, Bootstrap...
                        </p>
                        <h6 className="text-start"> Catalouge : </h6>
                        <iframe
                          style={{ width: "900px", height: "500px" }}
                          src="https://online.fliphtml5.com/boeau/ecub/"
                          seamless="seamless"
                          scrolling="no"
                          frameborder="0"
                          allowtransparency="true"
                          allowfullscreen="true"
                        ></iframe>
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

export default Experience;
