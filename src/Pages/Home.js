import React, { useState } from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { searchUser } from "../features/userDetailsSlice";
import { useEffect } from "react";
const Home = () => {
  const { token } = useSelector((state) => {
    return state.app;
  });
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);
  return (
    <div>
      {token ? (
        <h2 className="heading">Welcome to the Products Store</h2>
      ) : (
        <h2 className="heading">Products Store</h2>
      )}
      <section>
        {token ? (
          <>
            <input
              className="form-control mr-2 w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchData(e.target.value)}
              style={{ maxWidth: "400px" }}
            ></input>
            <Product></Product>
          </>
        ) : (
          <>
            <Link className="navlink loginhere" to="/login">
              Login Here
            </Link>
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
