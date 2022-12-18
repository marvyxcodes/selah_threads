import React from "react";
import Image from "next/image";
import { useShoppingCart } from "../context/ShoppingCartContext";
import styles from "../styles/Home.module.css";

function CartTracker() {
  const { cartItems } = useShoppingCart();

  return (
    <div>
      {cartItems.length > 0 ? (
        <div className={`nav-icon ${styles.cartCount}`}>
          <p>{cartItems.length}</p>
        </div>
      ) : (
        <Image
          className="nav-icon"
          src="/cartIcon.svg"
          alt="User account"
          width={35}
          height={35}
        />
      )}
    </div>
  );
}

export default CartTracker;
