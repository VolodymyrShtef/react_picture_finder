import React from "react";
import styles from "./PF.module.css";

export default function Button({ onLoadMore }) {
  return (
    <button type="button" className={styles.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
}
