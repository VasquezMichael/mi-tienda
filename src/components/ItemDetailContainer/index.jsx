import React from "react";
import { Container } from "./style";
import { useState, useEffect } from "react";
import { customFetch } from "../../utils/customFetch";
import { products } from "../../utils/products";
import ItemDetail from "../ItemDetail";
const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    customFetch(products).then((res) => {
      setLoading(false);
      setItemDetail(res.find((item) => item.index == 1));
    });
  }, []);

  return (
    <Container>
      {!loading ? <ItemDetail product={itemDetail} /> : <p>Cargando...</p>}
    </Container>
  );
};

export default ItemDetailContainer;
