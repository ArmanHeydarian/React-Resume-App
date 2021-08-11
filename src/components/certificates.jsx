import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { images } from "../Data/CertificateData";

/* This Component will show an React ImageGallery that is containing certificate images in public folder.
   The Certificate file address are stored in CertificateData.js
   For Changing the current certificate with your own certificate you need just to change the content of the Certificate.js */

class Certificates extends Component {
  state = {};

  // A additional style for ImageGallery
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
