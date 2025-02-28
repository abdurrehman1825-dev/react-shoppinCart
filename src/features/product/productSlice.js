import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductsAPI } from "../../api/api";
import { fetchSingleProductAPI } from "../../api/api";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetchProductsAPI();
    console.log("server is called");
    return response.data;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (productID, { getState, rejectWithValue }) => {
    const { products } = getState().products;
    const existingProduct = products.find((prod) => prod.id === productID);
    if (existingProduct) return existingProduct;
    try {
      const response = await fetchSingleProductAPI(productID);
      return response.data;
    } catch (error) {
      return rejectWithValue("faild to fetch product");
    }
  }
);

const initialState = {
  loading: false,
  products: [],
  error: "",
};
const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
    builder.addCase(fetchSingleProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      const singleProcut = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (!singleProcut) {
        state.products.push(action.payload);
      }
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});
export default productSlice.reducer;
