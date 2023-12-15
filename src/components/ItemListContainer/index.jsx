import React from "react";
import { Container } from "./style";

import ItemList from "../ItemList";
import { useState, useEffect } from "react";
import { customFetch } from "../../utils/customFetch";
import { products } from "../../utils/products";
import { useParams } from "react-router-dom";
const ItemListContainer = ({ props }) => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    customFetch(products).then((res) => {
      setLoading(false);
      if (category) {
        setListProducts(res.filter((product) => product.category === category));
      } else {
        setListProducts(res);
      }
    });
  }, [category]);

  return (
    <Container>
      {!loading ? (
        <ItemList listProducts={listProducts} />
      ) : (
        <h2>cargando...</h2>
      )}
    </Container>
  );
};

export default ItemListContainer;
