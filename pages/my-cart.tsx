import React from "react";
import Image from "next/image";
import styles from "../styles/Cart.module.css";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function MyCart() {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    getItemQuantity,
    cartItems,
  } = useShoppingCart();

  console.log(cartItems);

  let cartElements = cartItems.map((product) => {
    return (
      <div className={styles.cartProducts} key={product.id}>
        <div>
          <Image src="/searchIcon.svg" alt="product" width={100} height={100} />
        </div>
        <div>
          <h1>{product.id}</h1>
          <p>$58</p>
          <p>Quantity: {product.quantity}</p>
          <p>Size: M</p>
        </div>
        <button onClick={() => removeFromCart(product.id)}>Remove</button>
      </div>
    );
  });
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartElements}
      {"elements here"}
    </div>
  );
}
