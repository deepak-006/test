import React from "react";
import styles from "./Qanda.module.css"; // Import CSS module
import { Link } from "react-router-dom";

const Qanda = () => {
  return (
    <div className={styles.header}>
      {/* Add onClick event handler to trigger page refresh */}
      <Link to="/home">QandA</Link>
    </div>
  );
};

export default Qanda;
