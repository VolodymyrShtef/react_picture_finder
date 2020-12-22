import React from "react";
import styles from "./PF.module.css";

export default function Modal({ URL, onCloseModal }) {
  return (
    <div className={styles.Overlay} onClick={onCloseModal}>
      <div className={styles.Modal}>
        <img src={URL} alt={"big"} />
      </div>
    </div>
  );
}
