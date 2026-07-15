import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import products from "./data/products";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    alert(`${product.title} added to cart!`);

    setCart([...cart, product]);
  }

  return (
    <div className="page">
      <Header cart={cart} />

      


      <ItemList
        products={products}
        onAddToCart={handleAddToCart}
      />

      <Footer />
    </div>
  );
}

export default App;