import React from "react";
import { useContext, ReactNode, createContext } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: CartItem) => void;
  decreaseCartQuantity: (id: CartItem) => void;
  removeFromCart: (id: string) => void;
  cartItems: CartItem[];
};

type CartItem = {
  _id: string;
  category: string;
  type: string;
  pathName: string;
  animeName: string;
  title: string;
  desc: string;
  imgUrl: string;
  price: number;
  size: object;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

// CONTEXT PROVIDER //
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  // this might become obsolete once useEffect code is in place
  // let localCartStore;
  // if (typeof window !== "undefined") {
  //   localCartStore = localStorage.getItem("cartItems");
  //   localCartStore ? (localCartStore = JSON.parse(localCartStore)) : "";
  // }

  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  // CART FUNCTIONS //
  function getItemQuantity(product: CartItem) {
    return cartItems.find((item) => item._id === product._id)?.quantity || 0;
  }
  function increaseCartQuantity(product: CartItem) {
    setCartItems((currItems) => {
      // USAGE OF == null circumvents in case return case is undefined;;
      if (currItems.find((item) => item._id === product._id) == null) {
        return [...currItems, { ...product, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item._id === product._id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  // was able to implement increase quantity and show quantity within cart page using product props, just need to adjust the rest of the functions
  function decreaseCartQuantity(product: CartItem) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item._id === product._id)?.quantity === 1) {
        return currItems.filter((item) => item._id !== product._id);
      } else {
        return currItems.map((item) => {
          if (item._id === product._id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item._id !== id);
    });
  }

  // GATHER CART ITEMS FROM LOCAL STORAGE IF PRESENT IN CLIENT BROWSER //
  React.useEffect(() => {
    let localCartStore;
    localCartStore = localStorage.getItem("cartItems");
    localCartStore ? (localCartStore = JSON.parse(localCartStore)) : [];
    setCartItems(localCartStore);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // RETURN PROVIDER TO ALL CHILDREN OF APPLICATION //
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

// Current issue is that I am trying to persist shopping cart through refreshes for user
// local storage would be the way to solve this.
// I had an issue as JSON.parse requires whatever it's parsing to be strictly a string (per typescript requirements);
// Then getting from localStorage is not possible serverside so I needed to include if statement ...
// ... that states ls.getItem should only run if window !== 'undefined'
// now hydration error exists because when refresh happens, client UI gathers localStorage items and sets state to it,
// while server has different UI, so to circumvent this, we need to implement useEffect in some way to wait for hydration then update.

// Dec 18 - resolved for now, now need to figure out implementation of cart items data via database?
