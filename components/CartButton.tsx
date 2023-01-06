import React from "react";
import Image from "next/image";
import { useShoppingCart } from "../context/ShoppingCartContext";
import styles from "../styles/Home.module.css";

function CartButton() {
  const { cartItems } = useShoppingCart();

  return (
    <>
      {cartItems.length > 0 ? (
        <div className={`nav-icon ${styles.cartCount}`}>
          <p>{cartItems.length}</p>
        </div>
      ) : (
        <Image
          className="nav-icon"
          src="/cartIcon.svg"
          alt="User account"
          width={40}
          height={40}
        />
      )}
    </>
  );
}

export default CartButton;
