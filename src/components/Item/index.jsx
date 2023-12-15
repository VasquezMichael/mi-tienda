import React from "react";
import { Container } from "./style";
import { useParams, Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Container>
      <img src={product.image} width={200} alt="" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <Link to={`/product/${product.id}`}>ver detalle</Link>
    </Container>
  );
};

export default Item;
