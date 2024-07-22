import {createSlice} from "@reduxjs/toolkit";

const catSlice = createSlice({
  name: "cat",
  initialState: {
    cats: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.isLoading = false;
      state.cats = action.payload;
    },
    getCatsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getMoreCatsFetch: (state) => {
      state.isLoading = true;
    },
    getMoreCatsSuccess: (state, action) => {
      state.isLoading = false;
      state.cats = [...state.cats, ...action.payload];
    },
    getMoreCatsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getCatsFetch,
  getCatsSuccess,
  getCatsFailure,
  getMoreCatsFetch,
  getMoreCatsSuccess,
  getMoreCatsFailure,
} = catSlice.actions;

export default catSlice.reducer;
