import React from "react";
import styles from "../styles/Home.module.css";

function NavSubMenu(props: { menuCategory: string }) {
  let collections = [
    "One Piece",
    "Naruto",
    "Demon Slayer",
    "Attack on Titan",
    "My Hero Academia",
  ];

  let clothing = [];

  // dynamic list style
  return <ul className={styles["sub-menu"]}></ul>;
}

export default NavSubMenu;
