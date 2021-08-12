import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import ReactPlayer from "react-player";
import { EducationData } from "../data/EducationData";
import { Fragment } from "react";

/* This Component will show the content of Education Information which has been storing in EducationData.js
   For Changing the information you need just to change the content of the EducationData.js */
class Education extends Component {
  // Tabs titles in Education component
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
              {EducationData.map((Item) => (
                <Tab.Pane eventKey={Item.TabTitle}>
                  <Container>
                    <Row>
                      <Col md={1} style={{ marginTop: 30 }}>
                        <Image
                          height={100}
                          width={80}
                          src={process.env.PUBLIC_URL + Item.LogoUrl}
                          thumbnail
                        />
                      </Col>
                      <Col md={10}>
                        <Row
                          className="font-weight-bold"
                          style={{ marginTop: 20, textAlign: "left" }}
                        >
                          <h5> {Item.Title} </h5>
                          <p>{Item.Date}</p>
                        </Row>

                        <Row className="text-left">
                          <p className="text-start">{Item.Description}</p>
                          <h6 className="text-start"> Technologies : </h6>
                          <p className="text-start">{Item.Technologies}</p>
                        </Row>
                        <Row>
                          <h6 className="text-start">
                            Project Presentation Video :
                          </h6>
                          <ReactPlayer controls="true" url={Item.RefrenceUrl} />
                        </Row>
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default Education;
