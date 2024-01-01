import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const { user } = useSelector((state) => {
    return state.app;
  });

  return (
    <>
      {user && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span className="logo">Products Store</span>
          <div>
            <Link className="navlink" to="/">
              Home
            </Link>
            <Link className="navlink" to="/cart">
              Cart
            </Link>
          </div>
          <span className="countcart">cart items: 0{items.length}</span>
        </div>
      )}
    </>
  );
};

export default Navbar;
