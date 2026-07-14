function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="brand">
          <span className="brand-logo">🛍️</span>
          <h2>Trend Shop</h2>
        </div>

        <div className="search-container">
          <form className="search-form">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
            />
            <button className="search-button">
              🔍
            </button>
          </form>
        </div>

        <div className="nav-actions">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">Contact</a>

          <button className="cart-btn">
            🛒
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;