import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function Navbar() {
  return (
    <header className="shadow">
      <nav className="nav h-16 flex justify-evenly items-center">
        <div className="primary-nav flex items-center">
          <Image
            className="logo"
            src="/weebLogo.svg"
            alt="Weeb Logo"
            width={100}
            height={20}
          />
          <ul className={styles.navLinks}>
            <li>
              <a>NEW</a>
            </li>
            <li>
              <a>LIMITED EDITION</a>
            </li>
            <li>
              <a>COLLECTIONS</a>
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
