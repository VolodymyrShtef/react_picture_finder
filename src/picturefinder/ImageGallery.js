import React, { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import styles from "./PF.module.css";

export default class ImageGalerry extends Component {
  render() {
    const markup = this.props.images.map((image) => (
      <ImageGalleryItem key={image.id} image={image} />
    ));
    return (
      <ul className={styles.ImageGallery} onClick={this.props.onShowModal}>
        {markup}
      </ul>
    );
  }
}
