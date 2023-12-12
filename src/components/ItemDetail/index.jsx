import React from "react";
import { Container, ImgContainer, DescriptionContainer } from "./style";
const ItemDetail = ({ product }) => {
  return (
    <Container>
      <ImgContainer>
        <img src={product.image} alt="" />
      </ImgContainer>
      <DescriptionContainer>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </DescriptionContainer>
    </Container>
  );
};

export default ItemDetail;
