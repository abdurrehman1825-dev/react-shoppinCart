import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserAPI } from "../../api/api";
import { fetchUserData } from "../user/userSlice";

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (userData, { dispatch, rejectWithValue }) => {
    try {
      const response = await loginUserAPI(userData);
      const token = response.data.token;
      if (token) {
        dispatch(fetchUserData());
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);

const initialState = {
  /* user: null, */
  isloggedIn: null,
  token: null,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isloggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.isloggedIn = false;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isloggedIn = true;
      state.token = action.payload.token;
      console.log("name =", state.token);
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isloggedIn = false;
      state.error = action.payload;
      console.log("login failed", state.error);
    });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
