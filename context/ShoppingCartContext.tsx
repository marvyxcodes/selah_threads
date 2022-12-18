import React from "react";
import { useContext, ReactNode, createContext } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (id: string) => void;
  decreaseCartQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  cartItems: CartItem[];
};

type CartItem = {
  id: string;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  // this might become obsolete once useEffect code is in place
  let localCartStore;
  if (typeof window !== "undefined") {
    localCartStore = localStorage.getItem("cartItems");
    localCartStore ? (localCartStore = JSON.parse(localCartStore)) : "";
  }

  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id: string) {
    console.log(id);
    setCartItems((currItems) => {
      // USAGE OF == null circumvents in case return case is undefined;;
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
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
      return currItems.filter((item) => item.id !== id);
    });
  }

  React.useEffect(() => {
    let localCartStore;
    localCartStore = localStorage.getItem("cartItems");
    localCartStore ? (localCartStore = JSON.parse(localCartStore)) : [];
    setCartItems(localCartStore);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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
