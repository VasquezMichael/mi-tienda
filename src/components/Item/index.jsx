import React from "react";
import { Container } from "./style";
const Item = ({ product }) => {
  return (
    <Container>
      <img src={product.image} width={200} alt="" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
    </Container>
  );
};

export default Item;
