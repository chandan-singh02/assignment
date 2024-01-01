import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/userDetailsSlice";
import { add } from "../features/cartSlice";
const Product = () => {
  const dispatch = useDispatch();

  const { products, loading, token, searchData } = useSelector((state) => {
    return state.app;
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          dispatch(getProducts());
        } else {
          console.log("Token is missing. Please log in first.");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [dispatch, token]);
  if (loading) {
    return <h1 className="green-success">Loading Data ...</h1>;
  }
  if (!token) {
    return <h1 className="message-red">Token is missing.Plzz LogIn first</h1>;
  }
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  //search

  return (
    <div className="productsWrapper">
      {products &&
        products
          .filter((ele) => {
            if (searchData.length === 0) {
              return ele;
            } else {
              return (
                (ele.brand &&
                  ele.brand.toLowerCase().includes(searchData.toLowerCase())) ||
                (ele.category &&
                  ele.category.toLowerCase().includes(searchData.toLowerCase()))
              );
            }
          })
          .map((ele) => (
            <div className="card" key={ele.id}>
              <img src={ele.thumbnail} alt={ele.title} />
              <h6>{ele.brand}</h6>
              <p>{ele.description}</p>
              <h4>{ele.category}</h4>
              <h5>Discount:{ele.discountPercentage}</h5>
              <button onClick={() => handleAdd(ele)} className="btn">
                Add to cart
              </button>
            </div>
          ))}
    </div>
  );
};

export default Product;
