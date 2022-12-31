import React from 'react'
import {useContext, createContext, ReactNode} from 'react';

type ProductsProviderProps = {
  children: ReactNode;
}

type ProductsContext = {
  prodCont: any;
  setProdCont: any;
}
const ProductsContext = createContext({} as ProductsContext);

export function useProducts() {
  return useContext(ProductsContext)
}

export function ProductsProvider({children}: ProductsProviderProps) {
  const [prodCont, setProdCont] = React.useState([]);

  return (
    <ProductsContext.Provider value={{prodCont, setProdCont}}>
      {children}
    </ProductsContext.Provider>
  )
}