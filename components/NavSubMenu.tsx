import React from "react";
import styles from "../styles/Home.module.css";

function NavSubMenu(props: { menuCategory: string; showSubMenu: boolean }) {
  const { menuCategory, showSubMenu } = props;

  let collections = [
    "One Piece",
    "Naruto",
    "Demon Slayer",
    "Attack on Titan",
    "My Hero Academia",
  ];

  let clothing = [];

  // function mountSubMenu(propString: string) {
  //   propString === "collections" &&
  //     // temporary index key //
  //     collections.map((item, index) => {
  //       return <li key={index}>{item}</li>;
  //     });
  // }

  return (
    <div
      className={styles["sub-menu"]}
      style={
        showSubMenu
          ? {
              opacity: "1",
            }
          : { opacity: "0" }
      }
    >
      <ul className="subMenu-list">
        <li className="subMenu-list_Item">Hello World</li>
      </ul>
    </div>
  );
}

export default NavSubMenu;

// When i hover over the menu item I want the subMenu to appear
// sub Menu should appear and also show whatever the menu item is taht is hovered over
