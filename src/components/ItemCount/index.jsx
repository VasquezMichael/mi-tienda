import React from "react";
import { useState } from "react";
const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const increase = () => count < stock && setCount(count + 1);
  const decrease = () => count > initial && setCount(count - 1);
  return (
    <div>
      <button onClick={decrease}>-</button>
      <p>{count}</p>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default ItemCount;
