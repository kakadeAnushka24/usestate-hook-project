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
      <h1 className="title">The Flower Hub!!!!!!</h1>

      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="badge">Popular</div>

            <div className="emoji">{product.emoji}</div>

            <h2>{product.name}</h2>

            {/* 👉 price pass karto */}
            <QuantityHandler price={product.price} />

          </div>
        ))}
      </div>
    </div>
  );
}

function QuantityHandler({ price }) {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(quantity + 1);

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // 👉 dynamic price
  const finalPrice = quantity > 0 ? quantity * price : price;

  return (
    <div className="quantity-box">
      
      {/* 👉 price yethun control hoto */}
      <p className="price">₹{finalPrice}</p>

      <button className="btn minus" onClick={decrement}>-</button>
      
      <span className="quantity">{quantity}</span>
      
      <button className="btn plus" onClick={increment}>+</button>
    </div>
  );
}

export default App;
