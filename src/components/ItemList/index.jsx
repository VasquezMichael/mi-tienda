import React from "react";
import Item from "../Item";
import { Container } from "./style";
const ItemList = ({ listProducts }) => {
  return (
    <Container>
      {listProducts.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default ItemList;
