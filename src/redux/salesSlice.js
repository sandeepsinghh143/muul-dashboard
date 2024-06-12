const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchSales = createAsyncThunk("fetchSales", async () => {
  const res = await fetch(
    `https://muul-backend.onrender.com/sale/get-all-sales`
  );
  const data = await res.json();
  return data;
});

const saleSlice = createSlice({
  name: "sale",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSales.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchSales.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchSales.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default saleSlice.reducer;
