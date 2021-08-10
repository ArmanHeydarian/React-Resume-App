import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { images } from "../Data/CertificateData";
class Certificates extends Component {
  state = {};
  styles = {
    imageGallery: {
      width: "40%",
      height: "auto",
    },
  };
  render() {
    return (
      <Container>
        <ImageGallery
          additionalClass={this.styles.imageGallery}
          items={images}
        />
      </Container>
    );
  }
}

export default Certificates;
