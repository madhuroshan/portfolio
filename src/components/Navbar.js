import React from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles["container"]}>
      <div className={styles["nav-links"]}>
        <a className={styles["nav-link"]}>🏠</a>
        <a className={styles["nav-link"]}>🏠</a>
        <a className={styles["nav-link"]}>🏠</a>
        <a className={styles["nav-link"]}>🏠</a>
        <a className={styles["nav-link"]}>🏠</a>
      </div>
    </div>
  );
}
