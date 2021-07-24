import React, { Component, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

class Skills extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Row>
          <Col md={4}>
            <Card
              bg={"info"}
              key={1}
              text={"light"}
              style={{ width: "18rem", marginTop: "30px" }}
              className="mb-2"
            >
              <Card.Header as="h5">.Net</Card.Header>
              <Card.Body className="text-start">
                <Card.Text>.Net Core, .Net Framework </Card.Text>

                <Card.Text>Asp.net Mvc </Card.Text>
                <Card.Text>WCF, WPF , UnitTest</Card.Text>
                <Card.Text>Entity FrameWork </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={"dark"}
              key={1}
              text={"light"}
              style={{ width: "18rem", marginTop: "30px" }}
              className="mb-2"
            >
              <Card.Header as="h5">Java</Card.Header>
              <Card.Body className="text-start">
                <Card.Text>J2EE</Card.Text>
                <Card.Text>Spring FrameWork</Card.Text>
                <Card.Text>HiberNate and JPA</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card
              bg={"success"}
              key={1}
              text={"light"}
              style={{ width: "18rem", marginTop: "30px" }}
              className="mb-2"
            >
              <Card.Header as="h5">DataBases</Card.Header>
              <Card.Body className="text-start">
                <Card.Text>Sql Server (TSQL)</Card.Text>
                <Card.Text>Oracle</Card.Text>
                <Card.Text>Data Modeling and ETL </Card.Text>
                <Card.Text>SSIS , PowerBI</Card.Text>
                <Card.Text>No Sql DB </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={"secondary"}
              key={1}
              text={"light"}
              style={{ width: "18rem", marginTop: "30px" }}
              className="mb-2"
            >
              <Card.Header as="h5">CLOUD</Card.Header>
              <Card.Body className="text-start">
                <Card.Text></Card.Text>
                <Card.Text>Azure DevOps Services </Card.Text>
                <Card.Text>AWS Services </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card
              bg={"warning"}
              key={1}
              text={"light"}
              style={{ width: "18rem", marginTop: "30px" }}
              className="mb-2"
            >
              <Card.Header as="h5">Front End</Card.Header>
              <Card.Body className="text-start">
                <Card.Text>REACT JS</Card.Text>
                <Card.Text>Html5, Css, Bootstrap</Card.Text>
                <Card.Text>Java Script, Jquery</Card.Text>
              </Card.Body>
            </Card>

            <Card
              bg={"primary"}
              key={1}
              text={"light"}
              style={{ width: "18rem", marginTop: "30px" }}
              className="mb-2"
            >
              <Card.Header as="h5">Architecture</Card.Header>
              <Card.Body className="text-start">
                <Card.Text>SOA , Microservise , MVC</Card.Text>
                <Card.Text>OOP and SOLID Concept </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Skills;
