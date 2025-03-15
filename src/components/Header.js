import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Cửa hàng công nghệ</h1>
      <nav>
        <Link to="/" style={{ marginRight: "20px" }}>
          Trang chủ
        </Link>
        <Link to="/cart">Giỏ hàng</Link>
      </nav>
    </header>
  );
}

export default Header;
