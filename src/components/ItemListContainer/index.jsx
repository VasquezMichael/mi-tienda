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
    customFetch(products).then((res) => {
      setLoading(false);
      setListProducts(res);
    });
  }, []);

  return (
    <Container>
      {/* <ItemCount initial={1} stock={5} onAdd={() => {}} /> */}
      {!loading ? (
        <ItemList listProducts={listProducts} />
      ) : (
        <h2>cargando...</h2>
      )}
    </Container>
  );
};

export default ItemListContainer;
