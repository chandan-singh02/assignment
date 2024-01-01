import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const loginUser = createAsyncThunk("loginUser", async () => {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
        // expiresInMins: 60,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Login successful:", result);
    if (result) {
      localStorage.setItem("user", JSON.stringify(result.username));
      localStorage.setItem("token", JSON.stringify(result.token));
    } else {
      alert("Please enter correct details");
    }
    return result;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
});
export const getProducts = createAsyncThunk("getProducts", async () => {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      headers: {
        Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const result = await response.json();
    console.log("result down");
    console.log(result);
    console.log("result down");
    return result;
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
});

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    token: null,
    products: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.user = action.payload;
      // console.log(token);
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { searchUser } = userDetail.actions;
export default userDetail.reducer;
