import React, { useState } from "react";
import { Container, ImgContainer, DescriptionContainer } from "./style";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
const ItemDetail = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);

  const onAdd = () => {
    setIsAdded(true);
  };

  return (
    <Container>
      <ImgContainer>
        <img src={product.image} alt="" />
      </ImgContainer>
      <DescriptionContainer>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </DescriptionContainer>
      {isAdded ? (
        <Link to="/cart">Ir al carrito</Link>
      ) : (
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
      )}
    </Container>
  );
};

export default ItemDetail;
