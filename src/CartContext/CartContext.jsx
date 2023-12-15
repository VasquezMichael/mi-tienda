import { createContext, useState, useContext } from "react";
const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [listCartProducts, setListCartProducts] = useState([]);

  const isInCart = (id) => {
    return listCartProducts.find((product) => product.id === id);
  };

  const addToCartContext = (item, cant) => {
    if (isInCart(item.id)) {
      const newCart = listCartProducts.map((product) => {
        if (product.id === item.id) {
          const newCant = product.cant + cant;
          return { ...product, cant: newCant };
        } else {
          return product;
        }
      });
      setListCartProducts(newCart);
    } else {
      const newProduct = { ...item, cant: cant };
      setListCartProducts([...listCartProducts, newProduct]);
    }
  };

  const removeProduct = (id) => {
    setListCartProducts(listCartProducts.filter((product) => product.id != id));
  };

  const cleanCart = () => {
    setListCartProducts([]);
  };

  const totalPriceCart = () => {
    return listCartProducts.reduce(
      (acc, product) => (acc += product.price * product.cant),
      0
    );
  };

  const totalCant = () => {
    return listCartProducts.reduce((acc, product) => (acc += product.cant), 0);
  };

  return (
    <CartContext.Provider
      value={{
        addToCartContext,
        removeProduct,
        cleanCart,
        totalPriceCart,
        totalCant,
      }}
    >
      {" "}
      {children}
    </CartContext.Provider>
  );
}
