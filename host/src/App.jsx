import React from "react";
import FoodList from "./components/FoodList.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";

const App = () => {
  return (
    <>
      <Header />
      <FoodList />
      <ProductList />
      <Footer />
    </>
  );
};

export default App;
