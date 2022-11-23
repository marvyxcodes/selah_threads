import React, { MouseEventHandler } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function NavSubMenu(props: {
  handleMouseOver: MouseEventHandler;
  showSubMenu: boolean;
  currentSubMenu: string;
}) {
  const { showSubMenu, handleMouseOver, currentSubMenu } = props;

  let collections = [
    {
      anime: "One Piece",
      src: "/onepiece.jpg",
      link: "/collections/one-piece",
    },
    { anime: "Naruto", src: "/naruto.jpg", link: "/collections/naruto" },
    {
      anime: "Demon Slayer",
      src: "/demonSlay.jpg",
      link: "/collections/demon-slayer",
    },
    {
      anime: "Attack on Titan",
      src: "/aot.png",
      link: "/collections/attack-on-titan",
    },
    {
      anime: "My Hero Academia",
      src: "/MHA.jpg",
      link: "/collections/my-hero-academia",
    },
  ];

  // refactor into pictures boxes ^

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

  // git test
  let listElements;

  if (currentSubMenu === "collections") {
    listElements = collections.map((obj) => {
      return (
        <li key={obj.anime} className={styles["colletions-list"]}>
          <a href={obj.link}>
            <Image
              className="collectionsImg"
              alt={obj.anime}
              src={obj.src}
              width={140}
              height={100}
            />
            <p>{obj.anime}</p>
          </a>
        </li>
      );
    });
  } else if (currentSubMenu === "clothing") {
  }

  return (
    <div
      onMouseOver={handleMouseOver}
      className={styles["sub-menu"]}
      style={
        showSubMenu
          ? {
              opacity: "1",
              visibility: "visible",
            }
          : { opacity: "0", visibility: "hidden" }
      }
    >
      <ul className={styles["sub-list"]}>{listElements}</ul>
    </div>
  );
}

export default NavSubMenu;
