import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "../services/products.service";

const initialState: IProduct[] = [];

export const getAllProductsCall = createAsyncThunk("getAllProdctsCall", async () => {
  return productsService.getAllProducts();
});

const ProductSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    updateProduct: (state: IProduct[], action: PayloadAction<IProduct>) => {
      const index = state.findIndex((product) => product.id === action.payload.id);
      state[index] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProductsCall.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export const { updateProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
