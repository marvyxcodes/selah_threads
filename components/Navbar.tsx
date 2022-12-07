import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import NavSubMenu from "./NavSubMenu";
import Link from "next/link";

function Navbar() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [currentSubMenu, setcurrentSubMenu] = useState("collections");

  function handleMouseOver(e: React.SyntheticEvent) {
    e.preventDefault();
    let subMenu = (e.target as HTMLInputElement).id;
    if (subMenu === "collections" || subMenu === "clothing") {
      setcurrentSubMenu(subMenu);
    }
    return setShowSubMenu(true);
  }

  function handleMouseOut() {
    setShowSubMenu(false);
  }

  return (
    <header className="shadow sticky top-0">
      <nav className="nav h-full flex justify-evenly items-center">
        <div className="primary-nav flex items-center">
          <Link className="logo" href="/">
            <Image src="/weebLogo.svg" alt="Weeb Logo" fill />
          </Link>
          <ul className={`nav-list ${styles.navLinks}`}>
            <li>
              <Link href="/product-category/new">NEW</Link>
            </li>
            <li>
              <Link href="/product-category/limited">LIMITED EDITION</Link>
            </li>
            <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <Link id="collections" href="/product-category/collections">
                COLLECTIONS
              </Link>
              <NavSubMenu
                currentSubMenu={currentSubMenu}
                handleMouseOver={handleMouseOver}
                showSubMenu={showSubMenu}
              />
            </li>
            <li>
              <Link id="/product-category/clothing" href="/clothing">
                CLOTHING
              </Link>
            </li>
          </ul>
        </div>

        <div className="secondary-nav">
          <ul className={styles.navLinks}>
            <li>
              <a>
                <Image
                  className="nav-icon"
                  src="/userIcon.svg"
                  alt="User account"
                  width={35}
                  height={35}
                />
              </a>
            </li>
            <li>
              <a>
                <Image
                  className="nav-icon"
                  src="/searchIcon.svg"
                  alt="User account"
                  width={35}
                  height={35}
                />
              </a>
            </li>
            <li>
              <a>
                <Image
                  className="nav-icon"
                  src="/cartIcon.svg"
                  alt="User account"
                  width={35}
                  height={35}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
