import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
};

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
                        <h3>Arman Heydarian</h3>
                      </Row>
                      <Row style={{ marginTop: 50, textAlign: "left" }}>
                        <h6>Software FullStack Developer</h6>
                      </Row>
                      <Row style={{ marginTop: 20, textAlign: "left" }}>
                        <h6>Back-End, FrontEnd </h6>
                      </Row>
                    </Col>
                  </Row>
                </Container>

                <Col
                  md={12}
                  style={{ padding: 20, borderTop: "solid 1px #cac7c7" }}
                >
                  <p className="text-start">
                    My name is Arman with over 7 years of hands-on experience in
                    designing and producing various softwares from Web
                    Application to Management Information Systems (MIS) in both
                    Back-end and Front-end. I enjoy being challenged and getting
                    engaged with projects that requires me to work outside of my
                    comfort zone so that I have won 2 prizes from Kharazmi and
                    Zagros innovation awards for introducing best practice in
                    software development. My experience has allowed me to attain
                    a solid knowledge of the full lifecycle for software
                    development projects based on new technologies. My technical
                    and interpersonal skills have been extremely developed to
                    act as a responsible team player in agile teams. It is worth
                    noting that I am so interested in Research and Development.
                  </p>
                </Col>
              </Tab.Pane>
              <Tab.Pane eventKey="interest">
                <Table striped bordered hover style={{ marginTop: 50 }}>
                  <thead>
                    <tr>
                      <th>Hobbies</th>
                      <th>Sport</th>
                      <th>Profession</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Travelling</td>
                      <td>Swimming</td>
                      <td>Proggramming</td>
                    </tr>
                    <tr>
                      <td>Movies</td>
                      <td>Snooker</td>
                      <td>Enterprise Software Architecture</td>
                    </tr>
                    <tr>
                      <td>Painting</td>
                      <td>Table Tennis</td>
                      <td>AI Technologies</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane eventKey="Contact">
                <Table striped bordered hover style={{ marginTop: 50 }}>
                  <tbody>
                    <tr>
                      <td style={styles.bold}>Email</td>
                      <td>Arman.Heydarian@gmail.com</td>
                    </tr>
                    <tr>
                      <td style={styles.bold}>Phone Number</td>
                      <td>+98 9366115575</td>
                    </tr>
                    <tr>
                      <td style={styles.bold}>LinkedIn</td>
                      <td>
                        <a href="https://www.linkedin.com/in/arman-heydarian-814009118/">
                          LinkedIn Profile
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td style={styles.bold}>Birthday</td>
                      <td>September 21 1991</td>
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
