import React from "react";
import styles from "styles/ProductPage.module.css";

function FilterNavigationBar() {
  return (
    <nav role="Filter Navigation" className={styles.filterNav}>
      <ul className={styles.filterList}>
        <li>Hoodies</li>
        <li>Pants</li>
        <li>Long Sleeves</li>
        <li>Sweaters</li>
        <li>T Shirts</li>
      </ul>
      <select className={styles.filterDropDown}>
        <option>Popular</option>
        <option>New</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </nav>
  );
}

export default FilterNavigationBar;
