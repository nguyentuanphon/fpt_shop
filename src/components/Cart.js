import React from "react";

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      {cartItems.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price.toLocaleString()} VNĐ
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ marginLeft: "10px", color: "red" }}
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>
          <h3>
            Tổng tiền:{" "}
            {cartItems
              .reduce((total, item) => total + item.price, 0)
              .toLocaleString()}{" "}
            VNĐ
          </h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
