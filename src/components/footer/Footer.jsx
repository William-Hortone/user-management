import React from "react";
import styles from "./footer.module.scss";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className={styles.footer}>
      &copy;
      {year} All rights reserved
    </div>
  );
};

export default Footer;
