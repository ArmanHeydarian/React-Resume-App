import React, { Component, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import ReactPlayer from "react-player";
import { ExperienceData } from "../data/ExperienceData";

/* This Component will show the content of Experience Information which has been storing in ExperienceData.js
   For Changing the information you need just to change the content of the ExperienceData.js */
class Experience extends Component {
  state = {
    // Tabs titles in Experience component
    Tags: [
      "Day Insurance Inc",
      "Kankash Inc",
      "Farzanegan Inc",
      "Personal Projects",
    ],
  };

  render() {
    const PresentaionFrame = (Item) => {
      if (Item.RefrenceUrl.includes("youtube")) {
        return (
          <Fragment>
            <h6 className="text-start"> Demo Video : </h6>
            <ReactPlayer width="100%" controls="true" url={Item.RefrenceUrl} />
          </Fragment>
        );
      } else {
        return (
          <Fragment>
            <h6 className="text-start"> Pichture : </h6>
            <Image src={process.env.PUBLIC_URL + Item.RefrenceUrl} />
          </Fragment>
        );
      }
    };

    const CatalogueFrame = (Item) => {
      if (Item.catalogue != "")
        return (
          <Fragment>
            <h6 className="text-start"> Catalouge : </h6>
            <iframe
              style={{ width: "900px", height: "500px" }}
              src={Item.catalogue}
              seamless="seamless"
              scrolling="no"
              frameborder="0"
              allowtransparency="true"
              allowfullscreen="true"
            ></iframe>
          </Fragment>
        );
    };

    return (
      <Container>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey={this.state.Tags[0]}
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
              {ExperienceData.map((Item) => (
                <Tab.Pane eventKey={Item.TabTitle}>
                  <Container>
                    <Row>
                      <Col md={1} style={{ marginTop: 30 }}>
                        <Image
                          height={150}
                          width={130}
                          src={process.env.PUBLIC_URL + Item.LogoUrl}
                          thumbnail
                        />
                      </Col>
                      <Col md={10}>
                        <Row
                          className="font-weight-bold"
                          style={{ marginTop: 20, textAlign: "left" }}
                        >
                          <h5>{Item.Title}</h5>
                          <p>{Item.Date}</p>
                        </Row>

                        <Row className="text-left">
                          <p className="text-start">{Item.Description}</p>
                          <h6 className="text-start"> Technologies : </h6>

                          <p className="text-start">{Item.Technologies}</p>
                        </Row>
                        <Row>{PresentaionFrame(Item)}</Row>
                        <hr />
                        <Row>{CatalogueFrame(Item)}</Row>
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

export default Experience;
