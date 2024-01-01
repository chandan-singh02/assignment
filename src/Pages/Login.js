import React from "react";
import { useDispatch } from "react-redux";
import { loginUser, getProducts } from "../features/userDetailsSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const [formData, setFormData] = useState({ username: "", password: "" });
  const onSubmitHandler = () => {
    dispatch(loginUser());
    dispatch(getProducts());
    navigate("/");
  };
  //   const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };
  return (
    <>
      {/* <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          required
        /> */}
      <div className="login">
        <h1>Login As a Guest</h1>
        <button type="submit" onClick={onSubmitHandler}>
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
