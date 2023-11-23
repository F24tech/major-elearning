// landingPageSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../utils';

export const fetchCategoriesData = createAsyncThunk('landingPage/categories', async () => {
  const apiUrl = `${baseUrl}/api/category-courses`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch landing page data');
  }
  return response.json();
});

const categorieSlice = createSlice({
  name: 'categories',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchCategoriesData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCategoriesData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categorieSlice.reducer;
