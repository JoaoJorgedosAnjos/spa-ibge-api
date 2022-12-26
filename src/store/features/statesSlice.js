import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getStates = createAsyncThunk(
    'states/getStates',
    async () => {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        return response.json();
    }
);

const statesSlice = createSlice(({
    name: "counties",
    initialState: {
        states: [],
        loading: false,
    },
    extraReducers: function (builder) {
        builder.addCase(getStates.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getStates.fulfilled, (state, action) => {
            state.loading = false;
            state.states = action.payload
        });
        builder.addCase(getStates.rejected, (state, action) => {
            state.loading = false;
        });

    }

}))

export default statesSlice.reducer;



