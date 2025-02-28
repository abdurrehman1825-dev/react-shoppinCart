import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserDataAPI } from "../../api/api";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchUserDataAPI();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  users: null,
  loading: null,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.isloggedIn = false;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.users = action.payload;
      console.log("user details = ", state.users);
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
export default userSlice.reducer;
