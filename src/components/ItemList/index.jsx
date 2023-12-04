import React from "react";
import Item from "../Item";
const ItemList = ({ listProducts }) => {
  console.log(listProducts);
  return (
    <div>
      <Item />
    </div>
  );
};

export default ItemList;
