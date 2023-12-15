import React from "react";
import { Container } from "./style";
import { useState, useEffect } from "react";
import { customFetch } from "../../utils/customFetch";
import { products } from "../../utils/products";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    customFetch(products).then((res) => {
      setLoading(false);
      setItemDetail(res.find((item) => item.id === parseInt(id)));
    });
  }, []);

  return (
    <Container>
      {!loading ? <ItemDetail product={itemDetail} /> : <p>Cargando...</p>}
    </Container>
  );
};

export default ItemDetailContainer;
