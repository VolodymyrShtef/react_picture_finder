import React from "react";
import styles from "./PF.module.css";

export default function ImageGalleryItem({ image }) {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  );
}
