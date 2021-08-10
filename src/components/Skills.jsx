import React, { Component, Fragment } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { SkillsData } from "../Data/SkillsData";

class Skills extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Row>
          {SkillsData.map((Item) => (
            <Col md={4}>
              <Card
                bg={Item.bg}
                key={Item.Key}
                text={"light"}
                style={{ width: "18rem", marginTop: "30px" }}
                className="mb-2"
              >
                <Card.Header as="h5">{Item.Title}</Card.Header>
                <Card.Body className="text-start">
                  {Item.Content.map((ListItem) => (
                    <Card.Text>{ListItem}</Card.Text>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Fragment>
    );
  }
}

export default Skills;
