import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import products from "./data/products";

function App() {
  return (
    <div className="page">
      <Header />

      <ItemList products={products} />

      <Footer />
    </div>
  );
}

export default App;