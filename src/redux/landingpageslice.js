// landingPageSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../utils';

export const fetchLandingPageData = createAsyncThunk('landingPage/fetchData', async () => {
  const apiUrl = `${baseUrl}/api/landing-pagesss?populate[logo][fields]&populate[carousal][populate]=*`;
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch landing page data');
  }
  return response.json();
});

const landingPageSlice = createSlice({
  name: 'landingPage',
  initialState: {
    data: null,
    loading: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLandingPageData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchLandingPageData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchLandingPageData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default landingPageSlice.reducer;
