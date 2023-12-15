import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { CartContextProvider } from "./CartContext/CartContext";
function App() {
  return (
    <CartContextProvider>
      <BrowserRouter className="App">
        <Navbar />
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer props="Probando las props" />}
            />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
