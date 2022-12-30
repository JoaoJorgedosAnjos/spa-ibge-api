import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getInfos = createAsyncThunk(
  'infos/getInfos',
  async (selectedCounty) => {
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${selectedCounty}/distritos`);
    return response.json();
  }
);

const infosSlice = createSlice({
  name: 'infos',
  initialState: {
    infos: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getInfos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getInfos.fulfilled, (state, action) => {
      state.loading = false;
      state.infos = action.payload;
    });
    builder.addCase(getInfos.rejected, (state) => {
      state.loading = false;
    });
  }
});

export default infosSlice.reducer;