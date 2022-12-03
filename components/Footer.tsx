import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles["footer-nav"]}>
        <div className="forCustomers">
          <Link href="#">
            <h1>Account</h1>
          </Link>
          <Link href="#">Reviews</Link>
          <Link href="#">Q&A</Link>
        </div>
        <div className="aboutUs">
          <Link href="#">
            <h1>About Us</h1>
          </Link>
          <Link href="#">Careers</Link>
          <Link href="#">Contacts</Link>
        </div>

        <div className="contactInfo">
          <Link href="#">
            <h1>Contact</h1>
          </Link>
          <Link href="mailto:weebcare@weebmania.com">Email</Link>
          <Link href="tel:1234567890">Call Us</Link>
          <p>3432 Broadway Ave, New Orleans, USA</p>
        </div>
      </nav>
      <div className={styles.copyright}>Copyright @ WeebMania Inc.</div>
    </footer>
  );
};

export default Footer;
