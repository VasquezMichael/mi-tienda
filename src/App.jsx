import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter className="App">
        <Navbar />
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer props="Probando las props" />}
            />

            <Route path="/product/:id" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
