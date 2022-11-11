import React, {
  ChangeEvent,
  EventHandler,
  MouseEvent,
  MouseEventHandler,
  SyntheticEvent,
  useState,
} from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import NavSubMenu from "./NavSubMenu";
import Link from "next/link";

function Navbar() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [currentSubMenu, setcurrentSubMenu] = useState("");

  function handleMouseOver(e: React.SyntheticEvent) {
    e.preventDefault();
    let subMenu = (e.target as HTMLInputElement).id;
    setShowSubMenu(true);
    setcurrentSubMenu(subMenu);
  }

  function handleMouseOut() {
    setShowSubMenu(false);
  }

  return (
    <header className="shadow sticky top-0">
      <nav className="nav h-16 flex justify-evenly items-center">
        <div className="primary-nav flex items-center">
          <Link href="/">
            <Image
              className="logo"
              src="/weebLogo.svg"
              alt="Weeb Logo"
              width={100}
              height={20}
            />
          </Link>
          <ul className={styles.navLinks}>
            <li>
              <a>NEW</a>
            </li>
            <li>
              <a>LIMITED EDITION</a>
            </li>
            <li>
              <Link
                id="collections"
                href="/collections"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                COLLECTIONS
              </Link>
            </li>
            <li>
              <Link
                id="clothing"
                href="/clothing"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                CLOTHING
              </Link>
            </li>
          </ul>
        </div>
        <NavSubMenu menuCategory={currentSubMenu} showSubMenu={showSubMenu} />
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
