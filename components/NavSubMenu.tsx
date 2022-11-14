import React, { MouseEventHandler } from "react";
import styles from "../styles/Home.module.css";
import uniqid from "uniqid";

function NavSubMenu(props: { handleMouseOut: MouseEventHandler; handleMouseOver: MouseEventHandler; menuCategory: string; showSubMenu: boolean }) {
  const { menuCategory, showSubMenu, handleMouseOver, handleMouseOut} = props;

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
      pants: "Pants",
    },
    {
      category: "Women",
      body: "Body",
      top: "Top",
      shorts: "Shorts",
    },
    {
      category: "Men",
      shorts: "Shorts",
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
    }
    // } else if (str === "clothing") {
    //   // loop through array of clothing category objects
    //   // display every category into a separate <li> element

    //   subMenu = clothing.map((list) => {
        
    //   });
    // }

    return subMenu;
  }


  return (
    <div
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
      className={styles["sub-menu"]}
      style={
        showSubMenu
          ? {
              opacity: "1",
              visibility: "visible",
            }
          : { opacity: "0",
              visibility: 'hidden',
             }
      }
    >
      <ul className="subMenu-list"
      >{mountSubMenu(menuCategory)}</ul>
    </div>
  );
}

export default NavSubMenu;

// When i hover over the menu item I want the subMenu to appear
// sub Menu should appear and also show whatever the menu item is taht is hovered over
