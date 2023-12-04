import React from "react";
import { CartWidgetContainer } from "./style";
import { FaShoppingCart } from "react-icons/fa";
const CartWidget = () => {
  return (
    <CartWidgetContainer>
      <FaShoppingCart />
    </CartWidgetContainer>
  );
};

export default CartWidget;
