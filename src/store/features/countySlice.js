import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMunicipalities = createAsyncThunk(
    'municipalities/getMunicipalities',
    async (selectedUf) => {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`);
      return response.json();
    }
  );
  
  const municipalitiesSlice = createSlice({
    name: 'municipalities',
    initialState: {
      municipalities: [],
      loading: false,
    },
    extraReducers: (builder) => {
      builder.addCase(getMunicipalities.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getMunicipalities.fulfilled, (state, action) => {
        state.loading = false;
        state.municipalities = action.payload;
      });
      builder.addCase(getMunicipalities.rejected, (state) => {
        state.loading = false;
      });
    }
  });
  
  
  export default municipalitiesSlice.reducer;