import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import NavSubMenu from "./navSubMenu";
import Link from "next/link";

function Navbar() {
  const [showSubMenu, setShowSubMenu] = useState(true);

  function handleHover() {
    setShowSubMenu(true);
  }

  function handleMouseOut() {
    setShowSubMenu(false);
  }

  console.log(showSubMenu);

  return (
    <header className="shadow">
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
                href="/collections"
                onMouseOver={handleHover}
                onMouseOut={handleMouseOut}
              >
                COLLECTIONS
              </Link>
              {showSubMenu && <NavSubMenu menuCategory={"Collections"} />}
            </li>
            <li>
              <a>CLOTHING</a>
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
