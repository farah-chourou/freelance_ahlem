import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import "./Cart.css"; // You need to create a Cart.css file for the custom styles

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    window.location.reload(); // Reload the page to update the cart
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    return totalPrice.toFixed(2); // Format to two decimal places
  };

  return (
    <div style={{ padding: 50 }}>
      <div className="cart-container">
        <h2 className="cart-title">Cart</h2>
        <ul className="cart-list">
          {cart.map((item) => (
            <Stack
              direction="row"
              key={item._id}
              className="cart-item"
              onMouseEnter={(e) => {
                e.currentTarget.classList.add("hovered");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.classList.remove("hovered");
              }}
            >
              <Typography>
                {" "}
                <strong>{item.name} </strong>{" "}
              </Typography>
              <Typography sx={{ marginLeft: "auto" }}>
                {" "}
                <strong> {item.price}$</strong>
              </Typography>
            </Stack>
          ))}
        </ul>
        {cart.length > 0 && (
          <div className="total-price" style={{ marginLeft: "auto" }}>
            <Typography>
              <strong> Total Price: {getTotalPrice()} $</strong>
            </Typography>
          </div>
        )}
        {cart.length > 0 && (
          <Button
            variant="outlined"
            onClick={handleClearCart}
            className="clear-button"
          >
            Clear Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default Cart;
