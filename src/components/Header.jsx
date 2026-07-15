import { useState } from "react";

function Header({ cart }) {
  const [showCart, setShowCart] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="brand">
          <span className="brand-logo">🛍️</span>
          <h2>Trend Shop</h2>
        </div>

        {/* Search */}
        <div className="search-container">
          <form className="search-form">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />

            <button type="button" className="search-button">
              🔍
            </button>
          </form>
        </div>

        {/* Navigation */}
        <div className="nav-actions">
          <a href="#" className="nav-link">
            Home
          </a>

          <a href="#" className="nav-link">
            Products
          </a>

          <a href="#" className="nav-link">
            Contact
          </a>

          {/* Cart */}
          <div style={{ position: "relative" }}>
            <button
              className="cart-btn"
              onClick={() => setShowCart(!showCart)}
            >
              🛒 ({cart.length})
            </button>

            {showCart && (
              <div
                style={{
                  position: "absolute",
                  top: "45px",
                  right: "0",
                  width: "320px",
                  backgroundColor: "#ffffff",
                  color: "#222",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "15px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                  zIndex: 999,
                }}
              >
                <h3
                  style={{
                    marginTop: 0,
                    color: "#222",
                  }}
                >
                  🛒 Shopping Cart
                </h3>

                {cart.length === 0 ? (
                  <p style={{ color: "#555" }}>Your cart is empty.</p>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        borderBottom: "1px solid #ddd",
                        padding: "10px 0",
                      }}
                    >
                      <h4
                        style={{
                          margin: 0,
                          color: "#222",
                        }}
                      >
                        {item.title}
                      </h4>

                      <p
                        style={{
                          margin: "5px 0",
                          color: "#555",
                        }}
                      >
                        Product ID: {item.id}
                      </p>

                      <p
                        style={{
                          margin: 0,
                          color: "green",
                          fontWeight: "bold",
                        }}
                      >
                        ${item.price}
                      </p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;