import React from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";



const navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <img src="/menpic.webp" alt="" />
          <h2>Haider Irfan</h2>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
