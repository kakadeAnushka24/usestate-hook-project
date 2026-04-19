import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Rose", price: 199, emoji: "🌹" },
    { id: 2, name: "Lily", price: 299, emoji: "🌼" },
    { id: 3, name: "Tulip", price: 399, emoji: "🌷" }
  ];

  return (
    <div className="container">
      <h1 className="title">✨ Flower Boutique</h1>

      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="badge">Popular</div>

            <div className="emoji">{product.emoji}</div>

            <h2>{product.name}</h2>
            <p className="price">₹{product.price}</p>

            <QuantityHandler />
          </div>
        ))}
      </div>
    </div>
  );
}

function QuantityHandler() {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(quantity + 1);

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity-box">
      <button className="btn minus" onClick={decrement}>-</button>
      <span className="quantity">{quantity}</span>
      <button className="btn plus" onClick={increment}>+</button>
    </div>
  );
}

export default App;