import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <ItemListContainer props="Probando las props" />
      </div>
    </>
  );
}

export default App;
