import { createContext, useContext, useReducer } from "react";
import { ProductReducer } from "./ProductReducer";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const [products, dispatch] = useReducer(ProductReducer, {
    products: [],
    sortBy: null
  });

  return (
    <ProductContext.Provider
      value={{
        products: products.products,
        sortBy: products.sortBy,
        productDispatch: dispatch
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export function useProduct() {
  return useContext(ProductContext);
}
