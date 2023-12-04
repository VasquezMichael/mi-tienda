import React from "react";
import { Container } from "./style";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import { useState, useEffect } from "react";
import { customFetch } from "../../utils/customFetch";
import { products } from "../../utils/products";
const ItemListContainer = ({ props }) => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    customFetch(products).then((res) => setListProducts(res));
  }, []);
  return (
    <Container>
      <h2>{props}</h2>
      {/* <ItemCount initial={1} stock={5} onAdd={() => {}} /> */}
      <ItemList listProducts={listProducts} />
    </Container>
  );
};

export default ItemListContainer;
