import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart);
  const handleRemove = (productID) => {
    dispatch(remove(productID));
  };
  return (
    <div>
      <h3>Cart Items</h3>
      {products.length > 0 ? (
        <div className="cartWrapper">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h6>{product.brand}</h6>
              <p>{product.description}</p>
              <h4>{product.category}</h4>
              <h5>Discount:{product.discountPercentage}</h5>
              <button onClick={() => handleRemove(product.id)} className="btn">
                Remove from cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="message-red">Cart List is Empty plzz add Items</h1>
      )}
    </div>
  );
};

export default Cart;
