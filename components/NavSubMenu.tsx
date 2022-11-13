import React from "react";
import styles from "../styles/Home.module.css";
import uniqid from "uniqid";

function NavSubMenu(props: { menuCategory: string; showSubMenu: boolean }) {
  const { menuCategory, showSubMenu } = props;

  let collections = [
    "One Piece",
    "Naruto",
    "Demon Slayer",
    "Attack on Titan",
    "My Hero Academia",
  ];

  let clothing = [
    {
      category: "Unisex",
      hoodies: "Hoodies",
      shirts: "T-Shirts",
      sweaters: "Sweaters",
      pants: "pants",
    },
    {
      category: "Women",
      body: "Body",
      top: "Top",
      shorts: "Shorts",
    },
    {
      category: "Men",
      pants: "Pants",
      suits: "Suits",
    },
  ];

  function mountSubMenu(str: string) {
    let subMenu;

    if (str === "") subMenu = <li></li>;

    if (str === "collections") {
      subMenu = collections.map((item) => {
        return (
          <li key={uniqid()} id={uniqid()}>
            {item}
          </li>
        );
      });
    } else if (str === "clothing") {
      subMenu = clothing.map((list) => {
        return (
          <ul key={uniqid()}>
            <a>{list.category}</a>
            <li></li>
          </ul>
        );
      });
    }

    return subMenu;
  }

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
      <ul className="subMenu-list">{mountSubMenu(menuCategory)}</ul>
    </div>
  );
}

export default NavSubMenu;

// When i hover over the menu item I want the subMenu to appear
// sub Menu should appear and also show whatever the menu item is taht is hovered over
