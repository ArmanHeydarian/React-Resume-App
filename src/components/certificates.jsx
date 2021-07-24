import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

class Certificates extends Component {
  state = {};

  render() {
    const images = [
      {
        original: process.env.PUBLIC_URL + "/Scrum Certificate.jpg",
        thumbnail: process.env.PUBLIC_URL + "/Scrum Certificate.jpg",
        description: "Scrum Course Certificate",
      },
      {
        original: process.env.PUBLIC_URL + "/Paper Cert.jpg",
        thumbnail: process.env.PUBLIC_URL + "/Paper Cert.jpg",
        description: "Acsij Journal Paper",
      },
      {
        original: process.env.PUBLIC_URL + "/ISMS Cert.jpg",
        thumbnail: process.env.PUBLIC_URL + "/ISMS Cert.jpg",
        description: "ISMS Fundation Course Certificate",
      },

      {
        original: process.env.PUBLIC_URL + "/ITIL Cert.jpg",
        thumbnail: process.env.PUBLIC_URL + "/ITIL Cert.jpg",
        description: "ITIL v4 Course Certificate",
      },
      {
        original: process.env.PUBLIC_URL + "/Patent Cert.jpg",
        thumbnail: process.env.PUBLIC_URL + "/Patent Cert.jpg",
        description: "Registered Patent License",
      },
      {
        original: process.env.PUBLIC_URL + "/Namayan Cert.jpg",
        thumbnail: process.env.PUBLIC_URL + "/Namayan Cert.jpg",
        description: "Namayan Qualifiatin Certificate",
      },
      {
        original: process.env.PUBLIC_URL + "/Kharazmi Award Cert.jpg",
        thumbnail: process.env.PUBLIC_URL + "/Kharazmi Award Cert.jpg",
        description: "Kharazmi Award Certificate",
      },
    ];
    return (
      <Container>
        <ImageGallery items={images} />
      </Container>
    );
  }
}

export default Certificates;
