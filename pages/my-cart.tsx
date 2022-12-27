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

  console.log("cart:", cartItems);

  let cartSubTotal = cartItems.forEach((item) => {
    let total = 0;
    console.log(item.price * item.quantity);
  });

  console.log(cartSubTotal);

  let cartElements = cartItems.map((product) => {
    // console.log(product);
    return (
      <div key={product._id}>
        <div className={styles.cartProducts}>
          <div className={`productImg ${styles.cartImg}`}>
            <Image src={product.imgUrl} alt="product" fill />
          </div>
          <div className={styles.cartInfo}>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>Quantity:{product.quantity}</p>
            <p>Size: M</p>
            <button
              className={styles.removeBtn}
              onClick={() => removeFromCart(product._id)}
            >
              Remove
            </button>
            <div className={styles.quantityAdjuster}>
              <button onClick={() => decreaseCartQuantity(product)}>-</button>
              <button onClick={() => increaseCartQuantity(product)}>+</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  });
  return (
    <div className={styles.cartPage}>
      <div className={styles.itemsContainer}>
        <div className={styles.cartHeader}>
          <h1>Shopping Cart</h1>
        </div>
        {cartElements}
      </div>
      <div className={styles.cartSummary}>
        <h1>Cart Summary</h1>
        <h3>Total Items: {cartItems.length}</h3>
        <p>Sub-Total Amount: </p>
        <p>Shipping:</p>
        <p>Taxes:</p>
        <button className={styles.checkoutBtn}>Checkout</button>
      </div>
    </div>
  );
}
